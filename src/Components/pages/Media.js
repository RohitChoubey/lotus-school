import React, { useState } from 'react';
//import 'bootstrap/dist/css/.min.css'; // Import Bootstrap CSS
import PageBanner from '../utility/PageBanner';
import InstagramFeed from '../utility/InstagramFeed';

const Media = () => {
  const [zoomedImg, setZoomedImg] = useState(null);

  // Function to handle image click and zoom
  const handleImageClick = (img) => {
    setZoomedImg(img);
  };

  // Function to close the zoomed image
  const closeZoomedImg = () => {
    setZoomedImg(null);
  };

  return (
    <main>
      <PageBanner />
    <div className="container mt-4">
      <InstagramFeed />
    </div>
    </main>
  );
};

export default Media;