import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS if needed
import logo from "../assets/img/logo/logo.png";
import { FontAwesomeIcon,  } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { faPhone, faEnvelope, faMapMarkerAlt, faHeart  } from "@fortawesome/free-solid-svg-icons";  // Correct import
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
    <div className="footer-area footer-padding">
      <div className="container">
        <div className="row justify-content-between">
          
          {/* Logo and Social Links */}
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-8">
            <div className="single-footer-caption mb-50">
              <div className="footer-logo mb-35">
                <a href="/">
                  <img src={logo} alt="Lotus Gyan Ganga Welfare Society" width="100" />
                </a>
              </div>
              <div className="footer-tittle">
                <p><strong>Lotus Gyan Ganga Welfare Society</strong> works towards education, 
                  environment, skill development & women empowerment.</p>
              </div>
              <div className="footer-social">
                <a href="https://bit.ly/sai4ull" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
            </div>
          </div>

          {/* Our Work Section */}
          <div className="offset-xl-1 col-xl-2 col-lg-2 col-md-4 col-sm-6">
            <div className="single-footer-caption mb-50">
              <div className="footer-tittle">
                <h4>Our Work</h4>
                <ul>
                  <li><a href="#">Education</a></li>
                  <li><a href="#">Environment</a></li>
                  <li><a href="#">Skill Development</a></li>
                  <li><a href="#">Women Empowerment</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
            <div className="single-footer-caption mb-50">
              <div className="footer-tittle">
                <h4>Contact</h4>
                <ul>
                  <li><Link t0="tel:000000"><FontAwesomeIcon icon={faPhone} /> +91 00000000</Link></li>
                  <li><Link to="mailto:lotusgyangangawelfaresociety@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> lotusgyangangawelfaresociety@ gmail.com</Link></li>
                  <li><Link to="https://maps.app.goo.gl/bB7CyRfGcM7zjM9z7" target="_blank"><FontAwesomeIcon icon={faMapMarkerAlt} /> ITI Road, Faridabad, Haryana 121001</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Donation Section */}
          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
            <div className="single-footer-caption mb-50">
              <div className="footer-tittle text-center">
                <h4>Support Us</h4>
                <p>Your contribution helps us empower communities.</p>
                <button className="btn btn-danger mt-2" onClick={() => window.location.href = "/donation"}>
                  <FontAwesomeIcon icon={faHeart} /> Donate Now
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="footer-bottom-area">
      <div className="container">
        <div className="footer-border">
          <div className="row">
            <div className="col-xl-12">
              <div className="footer-copy-right text-center">
                <p>Copyright ©2025 All rights reserved @ Lotus Gyan Ganga Welfare Society</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
      {/* <div id="back-top">
        <a title="Go to Top" href="#">
          {" "}
          <i class="fas fa-level-up-alt"></i>
        </a>
      </div> 
      
         const accessToken = 'IGAAYLqBTyQydBZAFBEdDB5QmVpMGxYTWFpTEhTX3NMU0tuS0d0eG1oUFZAzU1BQVDRiRUdvQ0tYWXVXdkY3S2RJX2hJY04yWXdBeFpDeDlneTNtZA01XNy1oSjB5ZA3BRbndSRW1WY0xoNXJmVzBjd09XczM2NF9tbHc0MW80YWg0YwZDZD';
      const userId = '17841452739077003';   
      const apiUrl = url || `https://graph.instagram.com/${userId}/media?fields=id,caption,media_url,media_type,permalink&access_token=${accessToken}`;
     
      

          const accessToken = 'IGAAYLqBTyQydBZAFBEdDB5QmVpMGxYTWFpTEhTX3NMU0tuS0d0eG1oUFZAzU1BQVDRiRUdvQ0tYWXVXdkY3S2RJX2hJY04yWXdBeFpDeDlneTNtZA01XNy1oSjB5ZA3BRbndSRW1WY0xoNXJmVzBjd09XczM2NF9tbHc0MW80YWg0YwZDZD';
          const userId = '17841452739077003'; //instagram userId
          const youtubeApiKey = "AIzaSyAzSHUO0MtJh96T1j8qzakMJGT1KzdzzOE"; // Replace with your API Key
          const youtubeChannelId = "UCicFA-BUCZMdwlzhTPpGa-Q"; // Replace with your YouTube Channel ID


      */}
    </footer>
  );
};

export default Footer;
