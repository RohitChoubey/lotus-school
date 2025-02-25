// import React, { useState, useEffect } from "react";
// import LazyLoad from 'react-lazyload'; // Import LazyLoad


// const API_KEY = "AIzaSyAzSHUO0MtJh96T1j8qzakMJGT1KzdzzOE"; // Replace with your API Key
// const CHANNEL_ID = "UCicFA-BUCZMdwlzhTPpGa-Q"; // Replace with your YouTube Channel ID
// const MAX_RESULTS = 16; // Number of videos to fetch

// const YouTubeVideos = () => {
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchVideos();
//   }, []);

//   const fetchVideos = async () => {
//     try {
//       const response = await fetch(
//         `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`
//       );
//       const data = await response.json();
//       console.log(data);

//       if (data.items) {
//         setVideos(data.items);
//       } else {
//         setError('No videos found.');
//       }
//     } catch (err) {
//       setError('Failed to fetch videos.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main>
//       <div className="container my-4">
//         <h2 className="text-center mb-4">Latest Videos</h2>

//         {loading && <p className="text-center">Loading videos...</p>}
//         {error && <p className="text-danger text-center">{error}</p>}

//         <div className="row">
//           {videos.length > 0 ? (
//             videos.map((video) => (
//               <div key={video.id.videoId} className="col-md-6 col-lg-4 mb-4">
//                 <div className="card shadow-sm">
//                   <LazyLoad height={200} offset={100} once>
//                     <iframe
//                       className="card-img-top"
//                       width="100%"
//                       height="200"
//                       src={`https://www.youtube.com/embed/${video.id.videoId}`}
//                       title={video.snippet.title}
//                       frameBorder="0"
//                       allowFullScreen
//                       loading="lazy" // Native lazy loading
//                     ></iframe>
//                   </LazyLoad>
//                   <div className="card-body">
//                     <h6 className="card-title">{video.snippet.title}</h6>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             !loading && <p className="text-center">No videos available.</p>
//           )}
//         </div>
//       </div>
//     </main>
//   );
// };

// export default YouTubeVideos;
// components/MixedVideoFeed.js
import React, { useEffect, useState } from 'react';
import ApiUtility from '../utility/ApiUtility';

const YouTubeVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      // Fetch Instagram videos
      const instagramData = await ApiUtility.fetchInstagramData();

      // Fetch YouTube videos
      const youtubeData = await ApiUtility.fetchYouTubeData();

      // Process YouTube videos first
      const youtubeVideos = youtubeData.map((item) => ({
        id: item.id.videoId,
        caption: item.snippet.title,
        media_url: `https://www.youtube.com/embed/${item.id.videoId}`,
      }));

      // Process Instagram videos (only videos)
      const instagramVideos = instagramData
        .filter((item) => item.media_type === 'VIDEO')
        .map((item) => ({
          id: item.id,
          caption: item.caption || '', // Ensure caption is not undefined
          media_url: item.media_url,
        }));

      // **Exclude videos with "#specialday" or "#spcialday"**
      const filteredVideos = [...youtubeVideos, ...instagramVideos].filter(
        (video) =>
          !video.caption.toLowerCase().includes('#specialday') &&
          !video.caption.toLowerCase().includes('#spcialday')
      );

      setVideos(filteredVideos);
    } catch (error) {
      console.error('Error fetching videos:', error);
      setError('Failed to fetch videos.');
    } finally {
      setLoading(false);
    }
  };

  // Function to truncate captions and remove hashtags
  const truncateCaption = (caption, maxLength = 50) => {
    if (!caption) return '';
    const captionWithoutHashtags = caption.replace(/#\w+/g, ''); // Remove hashtags
    return captionWithoutHashtags.length > maxLength
      ? `${captionWithoutHashtags.substring(0, maxLength)}...`
      : captionWithoutHashtags;
  };

  if (loading) {
    return (
      <div className="container text-center my-4">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <h1 className="text-center my-4">Video Feed</h1>
        <div className="alert alert-danger" role="alert">
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="text-center my-4">Video Feed</h1>
      <div className="row">
        {videos.map((video) => (
          <div key={video.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <iframe
                src={video.media_url}
                title={video.caption}
                frameBorder="0"
                allowFullScreen
                style={{ height: '200px', width: '100%' }}
              ></iframe>
              <div className="card-body">
                <p className="card-text" title={video.caption}>
                  {truncateCaption(video.caption)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeVideos;
