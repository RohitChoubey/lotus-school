import React, { useState, useEffect } from "react";

import PageBanner from '../utility/PageBanner';


const API_KEY = "AIzaSyAzSHUO0MtJh96T1j8qzakMJGT1KzdzzOE"; // Replace with your API Key
const CHANNEL_ID = "UCicFA-BUCZMdwlzhTPpGa-Q"; // Replace with your YouTube Channel ID
const MAX_RESULTS = 12; // Number of videos to fetch

const YouTubeVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`
      );
      const data = await response.json();
      console.log(data);

      if (data.items) {
        setVideos(data.items);
      } else {
        setError("No videos found.");
      }
    } catch (err) {
      setError("Failed to fetch videos.");
    } finally {
      setLoading(false);
    }
  };

  return (
     <main>
          <PageBanner />
    <div className="container my-4">
      <h2 className="text-center mb-4">Latest Videos</h2>

      {loading && <p className="text-center">Loading videos...</p>}
      {error && <p className="text-danger text-center">{error}</p>}

      <div className="row">
        {videos.length > 0 ? (
          videos.map((video) => (
            <div key={video.id.videoId} className="col-md-6 col-lg-4 mb-4">
              <div className="card shadow-sm">
                <iframe
                  className="card-img-top"
                  width="100%"
                  height="200"
                  src={`https://www.youtube.com/embed/${video.id.videoId}`}
                  title={video.snippet.title}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
                <div className="card-body">
                  <h6 className="card-title">{video.snippet.title}</h6>
                </div>
              </div>
            </div>
          ))
        ) : (
          !loading && <p className="text-center">No videos available.</p>
        )}
      </div>
    </div>
    </main>
  );
};

export default YouTubeVideos;
