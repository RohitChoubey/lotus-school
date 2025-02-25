import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [caption, setCaption] = useState('');
  const [media, setMedia] = useState(null);
  const [mediaType, setMediaType] = useState(''); // 'photo' or 'video'
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Replace with your credentials (ideally from environment variables)

    const YOUTUBE_REDIRECT_URI = 'http://localhost:3000/callback'; // Adjust as needed
    const YOUTUBE_CLIENT_ID = 'YOUR_YOUTUBE_CLIENT_ID'; // From Google Cloud Console
    const FACEBOOK_PAGE_ID = process.env.REACT_APP_FACEBOOK_PAGE_ID;
    const FACEBOOK_ACCESS_TOKEN = process.env.REACT_APP_FACEBOOK_ACCESS_TOKEN;
    const INSTAGRAM_BUSINESS_ID = process.env.REACT_APP_INSTAGRAM_BUSINESS_ID;
    const LINKEDIN_ACCESS_TOKEN = process.env.REACT_APP_LINKEDIN_ACCESS_TOKEN;

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMedia(file);
      setMediaType(file.type.includes('video') ? 'video' : 'photo');
    }
  };

  // Convert file to URL for sharing
  const getMediaUrl = (file) => {
    return URL.createObjectURL(file);
  };

  // Post to Facebook
  const postToFacebook = async (file, caption) => {
    const formData = new FormData();
    formData.append('access_token', FACEBOOK_ACCESS_TOKEN);
    formData.append('caption', caption);
    formData.append(mediaType === 'photo' ? 'source' : 'file', file);

    const url = mediaType === 'photo'
      ? `https://graph.facebook.com/v19.0/${FACEBOOK_PAGE_ID}/photos`
      : `https://graph.facebook.com/v19.0/${FACEBOOK_PAGE_ID}/videos`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error?.message || 'Facebook upload failed');
      return `Facebook: Posted successfully (ID: ${data.id})`;
    } catch (error) {
      console.error('Facebook Error:', error.message);
      return 'Facebook: Error posting media';
    }
  };

  // Post to Instagram (Graph API - Business Accounts Only)
  const postToInstagram = async (file, caption) => {
    const mediaUrl = getMediaUrl(file);
    const creationUrl = `https://graph.facebook.com/v19.0/${INSTAGRAM_BUSINESS_ID}/media`;
    const publishUrl = `https://graph.facebook.com/v19.0/${INSTAGRAM_BUSINESS_ID}/media_publish`;

    try {
      const creationPayload = {
        access_token: FACEBOOK_ACCESS_TOKEN,
        caption: caption,
        [mediaType === 'photo' ? 'image_url' : 'video_url']: mediaUrl,
      };
      if (mediaType === 'video') creationPayload.media_type = 'VIDEO';

      const creationResponse = await fetch(creationUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(creationPayload),
      });
      const creationData = await creationResponse.json();
      if (!creationResponse.ok) throw new Error(creationData.error?.message || 'Instagram creation failed');
      const mediaId = creationData.id;

      const publishResponse = await fetch(publishUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ access_token: FACEBOOK_ACCESS_TOKEN, creation_id: mediaId }),
      });
      const publishData = await publishResponse.json();
      if (!publishResponse.ok) throw new Error(publishData.error?.message || 'Instagram publish failed');

      return `Instagram: Posted successfully (ID: ${publishData.id})`;
    } catch (error) {
      console.error('Instagram Error:', error.message);
      return 'Instagram: Error posting media (Business account required)';
    }
  };

  // Post to Threads (Workaround - No direct API)
  const postToThreads = (file, caption) => {
    const mediaUrl = getMediaUrl(file);
    const threadsShareUrl = `https://threads.net/intent/post?text=${encodeURIComponent(caption + ' ' + mediaUrl)}`;
    window.open(threadsShareUrl, '_blank');
    return 'Threads: Opened sharing window (Manual posting required)';
  };

  // Post to LinkedIn
  const postToLinkedIn = async (file, caption) => {
    const mediaUrl = getMediaUrl(file);
    const url = 'https://api.linkedin.com/v2/ugcPosts';
    const payload = {
      author: 'urn:li:person:YOUR_LINKEDIN_PERSON_ID',
      lifecycleState: 'PUBLISHED',
      specificContent: {
        'com.linkedin.ugc.ShareContent': {
          shareCommentary: { text: caption },
          shareMediaCategory: mediaType === 'photo' ? 'IMAGE' : 'VIDEO',
          media: [
            {
              status: 'READY',
              description: { text: caption },
              media: mediaUrl,
              title: { text: 'Uploaded Media' },
            },
          ],
        },
      },
      visibility: { 'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC' },
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${LINKEDIN_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error?.message || 'LinkedIn upload failed');
      return `LinkedIn: Posted successfully (ID: ${data.id})`;
    } catch (error) {
      console.error('LinkedIn Error:', error.message);
      return 'LinkedIn: Error posting media (Requires public URL)';
    }
  };

  // Post to YouTube (Videos Only)
  const postToYouTube = async (file, caption) => {
    if (mediaType !== 'video') return 'YouTube: Photos not supported';

    // Placeholder for OAuth flow (manual step required in this client-side example)
    const youtubeAccessToken = await getYouTubeAccessToken();
    if (!youtubeAccessToken) return 'YouTube: Authentication required';

    const url = 'https://www.googleapis.com/upload/youtube/v3/videos?part=snippet,status';
    const metadata = {
      snippet: {
        title: caption.slice(0, 100), // YouTube title limit is 100 chars
        description: caption,
        tags: ['uploaded', 'video'],
        categoryId: '22', // People & Blogs category
      },
      status: {
        privacyStatus: 'public', // or 'private', 'unlisted'
      },
    };

    const formData = new FormData();
    formData.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
    formData.append('file', file);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${youtubeAccessToken}`,
        },
        body: formData,
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error?.message || 'YouTube upload failed');
      return `YouTube: Posted successfully (ID: ${data.id})`;
    } catch (error) {
      console.error('YouTube Error:', error.message);
      return 'YouTube: Error posting video';
    }
  };

  // Helper to initiate YouTube OAuth (client-side simplified)
  const getYouTubeAccessToken = async () => {
    // In a real app, implement full OAuth flow with redirect
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${YOUTUBE_CLIENT_ID}&redirect_uri=${encodeURIComponent(YOUTUBE_REDIRECT_URI)}&response_type=token&scope=https://www.googleapis.com/auth/youtube.upload`;
    window.location.href = authUrl; // Redirects user to authenticate
    // After redirect, extract token from URL (not implemented here due to client-side limitation)
    return null; // Replace with actual token retrieval in production
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!media || !caption) {
      setMessage('Please provide a caption and upload a file.');
      return;
    }

    setLoading(true);
    setMessage('');

    const results = await Promise.all([
      postToFacebook(media, caption),
      postToInstagram(media, caption),
      postToThreads(media, caption),
      postToLinkedIn(media, caption),
      postToYouTube(media, caption),
    ]);

    setMessage(results.join('\n'));
    setLoading(false);

    // Reset form
    setCaption('');
    setMedia(null);
    setMediaType('');
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">Social Media Uploader</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="caption" className="form-label fw-bold">
                    Caption
                  </label>
                  <textarea
                    id="caption"
                    className="form-control"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    placeholder="Enter your caption here"
                    rows="4"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="media" className="form-label fw-bold">
                    Upload Media (Photo/Video)
                  </label>
                  <input
                    id="media"
                    type="file"
                    className="form-control"
                    accept="image/*,video/*"
                    onChange={handleFileChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className={`btn btn-primary w-100 ${loading ? 'disabled' : ''}`}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Uploading...
                    </>
                  ) : (
                    'Upload to Social Media'
                  )}
                </button>
              </form>
              {message && (
                <div className="alert alert-info mt-4" role="alert">
                  <pre className="mb-0">{message}</pre>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;