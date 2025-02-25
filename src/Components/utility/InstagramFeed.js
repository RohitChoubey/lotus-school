import React, { useEffect, useState } from 'react';
import ApiUtility from '../utility/ApiUtility';

const InstagramFeed = () => {
  const [media, setMedia] = useState([]);
  const [displayedMedia, setDisplayedMedia] = useState([]); // Media to display
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [nextPage, setNextPage] = useState(null);
  const itemsPerPage = 10; // Number of items to load per click
  const [selectedImage, setSelectedImage] = useState(false); // State for the button spinner

  useEffect(() => {
    fetchInstagramData();
  }, []);

  const excludedIds = [
    '18035648627159378', '17873244594187024', '18033310169426257', 
    '18000490598676087', '18018175481325431', '17896409760100366', 
    '18033384341529238', '17843152433903362', '18029774722395031', 
    '17956479461354479', '17937326780419472', '17927703560587775', 
    '17909419703573914', '17951006576177609'
  ];

  // Fetch Instagram data
  const fetchInstagramData = async (url = null) => {
    try {
        // Fetch data from ApiUtility
        const response = url ? await ApiUtility.fetchInstagramData(url) : await ApiUtility.fetchInstagramData();

        console.log("Raw API Response:", response); // Debugging

        // ✅ Check if response is valid
        if (!response || !response.data) {
            throw new Error("Invalid API response: No data found");
        }

        const data = response; // Already parsed JSON data
        console.log("Parsed Data:", data);

        // Filter only images and albums (exclude videos)
        let filteredData = data.data.filter(
            (item) =>
                (item.media_type === "IMAGE" || item.media_type === "CAROUSEL_ALBUM") &&
                !excludedIds.includes(item.id) &&
                !(item.caption && (item.caption.includes('#spcialday') || item.caption.includes("#news") || item.caption.includes('#specialday')))
        );

        // Sort by timestamp to get the latest 2 images first
        const sortedData = filteredData.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

        // Separate the latest 2 images and shuffle the rest
        const latestImages = sortedData.slice(0, 2);
        const remainingImages = shuffleArray(sortedData.slice(2));

        // Combine the latest images with the shuffled remaining images
        const combinedData = [...latestImages, ...remainingImages];

        // Append new data to the existing media array
        setMedia((prevMedia) => {
            const uniqueMedia = [...prevMedia, ...combinedData].reduce((acc, current) => {
                const isDuplicate = acc.some((item) => item.id === current.id);
                if (!isDuplicate) {
                    acc.push(current);
                }
                return acc;
            }, []);
            return uniqueMedia;
        });

        setNextPage(data.paging?.next); // Set the next page URL
    } catch (error) {
        console.error("Error fetching Instagram data:", error);
        setError(error.message);
    } finally {
        setLoading(false);
    }
  };

  // Shuffle an array using Fisher-Yates algorithm
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Load more data
  const loadMore = () => {
    if (nextPage) {
      fetchInstagramData(nextPage);
    }
  };

  // Redirect to Instagram account
  const redirectToInstagram = () => {
    window.open('https://www.instagram.com/lotus.gyan.ganga.society/', '_blank');
  };

  // Update displayed media whenever the media array changes
  useEffect(() => {
    setDisplayedMedia(media.slice(0, displayedMedia.length + itemsPerPage));
  }, [media]);

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
        <h1 className="text-center my-4">Photos</h1>
        <div className="alert alert-danger" role="alert">
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="text-center my-4">Photos</h1>
      <div className="row">
        {displayedMedia.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={item.media_url}
                className="card-img-top"
                alt={item.caption}
                style={{ height: '350px', objectFit: 'cover' }}
                loading="lazy" // Lazy load images
                onClick={() => setSelectedImage(item.media_url)}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="text-center my-4">
        {nextPage && (
          <button className="btn btn-primary me-3" onClick={loadMore}>
            Load More
          </button>
        )}
        <button className="btn btn-success" onClick={redirectToInstagram}>
          View on Instagram
        </button>
      </div>

      {/* Image Zoom Modal */}
      {selectedImage && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-body text-center">
                <img src={selectedImage} alt="Zoomed" className="img-fluid" />
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setSelectedImage(null)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  
  
    
  );
};

export default InstagramFeed;

// https://github.com/justitems/midrub_cms/issues/8