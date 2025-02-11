import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import PageBanner from '../utility/PageBanner';



const Media = () => {
  const [zoomedImg, setZoomedImg] = useState(null);

  // Sample images for the gallery
  const images = [
    'http://localhost:3001/static/media/h2_hero1.d5b10f384ae3726b1294.jpg',
    'http://localhost:3001/static/media/h2_hero1.d5b10f384ae3726b1294.jpg',
   'http://localhost:3001/static/media/h2_hero1.d5b10f384ae3726b1294.jpg',
    'http://localhost:3001/static/media/h2_hero1.d5b10f384ae3726b1294.jpg',
    'http://localhost:3001/static/media/h2_hero1.d5b10f384ae3726b1294.jpg',
    'http://localhost:3001/static/media/h2_hero1.d5b10f384ae3726b1294.jpg',
    'http://localhost:3001/static/media/h2_hero1.d5b10f384ae3726b1294.jpg',
    
    'http://localhost:3001/static/media/h2_hero1.d5b10f384ae3726b1294.jpg',
  ];

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
      <div className="row">
        {images.map((img, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-3 mb-4">
            <img
              src={img}
              alt={`Media item ${index + 1}`}
              onClick={() => handleImageClick(img)}
              className="img-fluid rounded shadow-sm cursor-pointer"
              style={{ cursor: 'pointer' }}
            />
          </div>
        ))}
      </div>

      {/* Zoomed image overlay */}
      {zoomedImg && (
        <div
          className="fixed-top vh-100 vw-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-75"
          onClick={closeZoomedImg}
          style={{ zIndex: 1050 }}
        >
          <img
            src={zoomedImg}
            alt="Zoomed"
            className="img-fluid rounded"
            style={{ maxWidth: '90%', maxHeight: '90%' }}
          />
        </div>
      )}
    </div>
    </main>
  );
};

export default Media;