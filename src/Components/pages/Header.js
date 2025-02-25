import React from "react";
import logo from "../assets/img/logo/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav,  NavDropdown, Container } from "react-bootstrap";
import "../assets/css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faMapMarkerAlt, faHeart  } from "@fortawesome/free-solid-svg-icons";  // Correct import
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header>
        <div className="header-area">
          <div className="main-header">
            <div className="header-top d-none d-sm-block">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="d-flex justify-content-between flex-wrap align-items-center">
                      <div className="header-info-left">
                        <ul>
                          <li>
                            <i className="fas fa-phone-alt"></i> +91 9911367332{" "}
                          </li>
                          <li>
                            <a href="mailto:lotusgyangangawelfaresociety@gmail.com">
                              lotusgyangangawelfaresociety@gmail.com
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="header-info-right">
                        <ul className="header-social">
                          <li>
                            <Link to="#" aria-label="Facebook">
                              <FontAwesomeIcon icon={faFacebookF} />
                            </Link>
                          </li>
                          <li>
                            <a href="#" aria-label="Twitter">
                              <FontAwesomeIcon icon={faTwitter} />
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="LinkedIn">
                              <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Instagram">
                              <FontAwesomeIcon icon={faInstagram} />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Navbar bg="light" expand="lg">
            <Container>
            <Navbar.Brand href="index.html">
                  <img
                    src={logo}
                    alt="Lotus Gyan Ganga Welfare Society"
                    width="100"
                  />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link as={Link} to="/">Home</Nav.Link> &ensp;
                      <Nav.Link as={Link} to="/about">About</Nav.Link>&ensp;
                      
                      {/* Media Dropdown */}
                      <NavDropdown title="Media" id="media-dropdown">
                        <NavDropdown.Item as={Link} to="/news">News & Events</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/photos">Photos</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/videos">Videos</NavDropdown.Item>
                      </NavDropdown>&ensp;

                      <Nav.Link as={Link} to="/contact">Contact</Nav.Link>&ensp;&ensp;
                      <Nav.Link to="/donation" className="header-btn">
                              <FontAwesomeIcon icon={faHeart} /> Donate Now
                              </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
              </Container>
            </Navbar> 
          </div>
        </div>
      </header>
    </div>
  );
}




                 