import React, { useEffect, useState } from 'react';
import ApiUtility from '../utility/ApiUtility';

const NewsAndMedia = () => {
  const [media, setMedia] = useState([]);
  const [displayedMedia, setDisplayedMedia] = useState([]); // Media to display
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [nextPage, setNextPage] = useState(null);
  const itemsPerPage = 10; // Number of items to load per click
  const [selectedImage, setSelectedImage] = useState(false); // State for the button spinner


  
// ✅ Fetch data when component mounts
useEffect(() => {
    fetchInstagramData();
}, []);


// Fetch Instagram data
const fetchInstagramData = async (url = null) => {
    try {
        setLoading(true);

        // Fetch data from ApiUtility
        const response = url ? await ApiUtility.fetchInstagramData(url) : await ApiUtility.fetchInstagramData();

        console.log("Raw API Response:", response); // Debugging

        // ✅ Check if response is valid
        if (!response || !response.data) {
            throw new Error("Invalid API response: No data found");
        }

        const data = response;
        console.log("Parsed Data:", data);

        // ❗ Filter posts to include only those with #news in the caption
        let filteredData = data.data.filter(
            (item) =>
                (item.media_type === "IMAGE" || item.media_type === "CAROUSEL_ALBUM") &&
                item.caption && item.caption.includes("#news") // ✅ Only keep posts with #news in caption
        );


        // const filteredMedia = displayedMedia.filter((item) => {
        //     const hasCaption = item.caption && item.caption.toLowerCase().includes("#news");
        //     if (!hasCaption) {
        //       console.log("Filtered Out:", item.caption); // Debug
        //     }
        //     return hasCaption;
        //   });
          
          //console.log("Filtered Media (Should Show Initially):", filteredMedia);
          

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
        <h1 className="text-center my-4">Instagram Feed</h1>
        <div className="alert alert-danger" role="alert">
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="text-center my-4">News and Events</h1>
      <div className="row">
      <div className="col-md-4 mb-4">
      <div className="card h-100">
      <img src="https://scontent.cdninstagram.com/v/t51.29350-15/279523811_579578886532078_6022364789764688996_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=okiDWVA2SJMQ7kNvgFu3zvF&_nc_oc=AdhsA238LVVi4znhv2Myen8fuJExEnZopndr5f53uuJoILEDW9qQk7OxS_QKnsrVD7Q&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AqqrEgA-yf83UhCrr8-Q3U8&oh=00_AYBQmzDAu2PXVYHnELxAPrUud--VtDy-x00FUXewlVqyOw&oe=67BDBB0B"
        alt ="Lotus Gyan Ganga Welfate Society"
        style={{ height: '350px', objectFit: 'cover' }}
        loading="lazy" // Lazy load images
        onClick={()=>setSelectedImage("https://scontent.cdninstagram.com/v/t51.29350-15/279523811_579578886532078_6022364789764688996_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=okiDWVA2SJMQ7kNvgFu3zvF&_nc_oc=AdhsA238LVVi4znhv2Myen8fuJExEnZopndr5f53uuJoILEDW9qQk7OxS_QKnsrVD7Q&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AqqrEgA-yf83UhCrr8-Q3U8&oh=00_AYBQmzDAu2PXVYHnELxAPrUud--VtDy-x00FUXewlVqyOw&oe=67BDBB0B")}
        />

        </div>
        </div>

        {displayedMedia
  .filter((item) => item.caption && item.caption.toLowerCase().includes("#news")) // ✅ Show only #news posts
  .map((item) => (
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

export default NewsAndMedia;