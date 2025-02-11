import React from "react";
import { useLocation } from "react-router-dom";

export default function PageBanner() {
  const location = useLocation(); // Get the current URL path

  // Define page titles based on routes
  const pageTitles = {
    "/contact": "Contact",
    "/about": "About Us",
    "/services": "Our Services",
    "/donate": "Donate Now",
    "/gallery": "Gallery",
    "/photos" : "Photos",
    "/videos" : "Videos",
  };

  // Default title if path is not listed
  const pageTitle = pageTitles[location.pathname] || "Welcome";

  return (
    <div>
      <div className="slider-area">
        <div className="slider-height2 slider-bg4 hero-overly d-flex align-items-center">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-6 col-md-6">
                <div className="hero-caption hero-caption2">
                  <h2>{pageTitle}</h2> {/* Dynamic Page Title */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
