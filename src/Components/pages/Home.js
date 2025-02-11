import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import logo from "../assets/img/logo/logo.png";
import serviceImg1 from "../assets/img/gallery/services-img1.jpg";
import serviceImg2 from "../assets/img/gallery/services-img2.jpg";
import serviceImg3 from "../assets/img/gallery/services-img3.jpg";
import bgImage from '../assets/img/gallery/section-bg1.jpg';
import whoweare from '../assets/img/gallery/about.jpg';
import sectionbg2 from '../assets/img/gallery/section-bg2.jpg';
import joining1  from '../assets/img/gallery/joining1.jpg';
import joining2  from '../assets/img/gallery/joining2.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faGraduationCap, faHandsHelping } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div>
      <main>
        {/* Slider Area */}
        <div className="slider-area position-relative">
          <Carousel indicators={false} controls={true}>
            {/* First Slide */}
            <Carousel.Item>
              <div className="single-slider hero-overly slider-height slider-bg1 d-flex align-items-center">
                <div className="container">
                  <div className="row">
                    <div className="col-xxl-6 col-xl-7 col-lg-7 col-md-8 col-sm-10">
                      <div className="hero-caption">
                        <h1 data-animation="fadeInUp" data-delay=".2s">
                          Support a cause you care about
                        </h1>
                        <p data-animation="fadeInUp" data-delay=".4s">
                          Join us in making a difference and empowering
                          communities around the world.
                        </p>
                        <a
                          href="#"
                          className="btn hero-btn"
                          data-animation="fadeInUp"
                          data-delay=".8s"
                        >
                          Active Cases
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>

            {/* Second Slide */}
            <Carousel.Item>
              <div className="single-slider hero-overly01 slider-height slider-bg2 d-flex align-items-center">
                <div className="container">
                  <div className="row justify-content-end">
                    <div className="col-xxl-6 col-xl-7 col-lg-7 col-md-8 col-sm-10">
                      <div className="hero-caption">
                        <h1 data-animation="fadeInUp" data-delay=".2s">
                          Make an Impact: Support the Causes That Matter Most
                        </h1>
                        <p data-animation="fadeInUp" data-delay=".4s">
                          Your support can help provide essential resources and
                          opportunities for those in need.
                        </p>
                        <a
                          href="#"
                          className="btn hero-btn"
                          data-animation="fadeInUp"
                          data-delay=".8s"
                        >
                          Active Cases
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>

            {/* Third Slide */}
            <Carousel.Item>
              <div className="single-slider hero-overly slider-height slider-bg3 d-flex align-items-center">
                <div className="container">
                  <div className="row">
                    <div className="col-xxl-6 col-xl-7 col-lg-7 col-md-8 col-sm-10">
                      <div className="hero-caption">
                        <h1 data-animation="fadeInUp" data-delay=".2s">
                          Empower Change: Stand Up for What You Believe In
                        </h1>
                        <p data-animation="fadeInUp" data-delay=".4s">
                          Together, we can create lasting change and inspire
                          hope for a brighter future.
                        </p>
                        <a
                          href="#"
                          className="btn hero-btn"
                          data-animation="fadeInUp"
                          data-delay=".8s"
                        >
                          Active Cases
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        {/* start  Causes we are serving  */}
        <div className="services-area1 section-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10 col-sm-11">
                <div className="section-tittle text-center mb-60">
                  <h2>Causes we are serving</h2>
                </div>
              </div>
            </div>
            <div className="services1-active">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="properties pb-30">
                    <div className="properties-card">
                      <div className="properties-img">
                        <a href="#">
                          <img src={serviceImg1} alt="Help the ecosystems" />
                        </a>
                        <div className="single-skill">
                          <div className="bar-progress">
                            <div id="bar1" className="barfiller">
                              <div className="tipWrap">
                                <span className="tip"></span>
                              </div>
                              <span
                                className="fill"
                                data-percentage="65"
                              ></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="wrap-wrapper">
                        <div className="properties-caption">
                          <h3>
                            <a href="#">Help the ecosystems</a>
                          </h3>
                          <p>
                            Sedac odio aliquet, fringilla odio eget, tincidunt
                            nunc duis aliquet pulvinar ante.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="properties pb-30">
                    <div className="properties-card">
                      <div className="properties-img">
                        <a href="#">
                          <img src={serviceImg2} alt="Sponsor a child" />
                        </a>
                        <div className="single-skill">
                          <div className="bar-progress">
                            <div id="bar2" className="barfiller">
                              <div className="tipWrap">
                                <span className="tip"></span>
                              </div>
                              <span
                                className="fill"
                                data-percentage="65"
                              ></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="wrap-wrapper">
                        <div className="properties-caption">
                          <h3>
                            <a href="#">Sponsor a child</a>
                          </h3>
                          <p>
                            Sedac odio aliquet, fringilla odio eget, tincidunt
                            nunc duis aliquet pulvinar ante.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="properties pb-30">
                    <div className="properties-card">
                      <div className="properties-img">
                        <a href="#">
                          <img src={serviceImg3} alt="Help senior citizens" />
                        </a>
                        <div className="single-skill">
                          <div className="bar-progress">
                            <div id="bar3" className="barfiller">
                              <div className="tipWrap">
                                <span className="tip"></span>
                              </div>
                              <span
                                className="fill"
                                data-percentage="65"
                              ></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="wrap-wrapper">
                        <div className="properties-caption">
                          <h3>
                            <a href="#">Help senior citizens</a>
                          </h3>
                          <p>
                            Sedac odio aliquet, fringilla odio eget, tincidunt
                            nunc duis aliquet pulvinar ante.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* who we are section */}
                <div className="support-company-area section-padding">
                  <div className="container">
                    <div className="row align-items-center justify-content-between">
                      <div className="col-xl-6 col-lg-6 col-md-10">
                        <div className="support-location-img">
                          <img
                            src={whoweare}
                            alt="About Us"
                          />
                        </div>
                      </div>
                      <div className="col-xl-5 col-lg-6 col-md-10">
                        <div className="right-caption">
                          <div className="section-title">
                            <h2>Who We Are</h2>
                          </div>
                          <div className="support-caption">
                            <p className="mb-10">
                              At Lotus Gyan Ganga Welfare Society, we believe
                              that every child deserves access to quality
                              education and the tools to succeed. Our mission is
                              to empower underprivileged children by providing
                              them with free education and essential computer
                              skills.
                            </p>
                            <p className="pera-top">
                              We are dedicated to bridging the educational gap
                              and fostering a brighter future for the next
                              generation. Through our programs, we aim to equip
                              children with the knowledge and skills they need
                              to thrive in an increasingly digital world.
                            </p>
                            <a href="about.html" className="btn about-btn">
                              Learn More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            
          </div>
          
        </div>
        {/* End  Causes we are serving  */}
      </main>

      {/* number count section */}
      <div className="count-down-area pt-25 section-img-bg2" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-12">
            <div className="count-down-wrapper">
              <div className="row justify-content-between">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="single-counter d-flex align-items-center">
                    <div className="counter-img">
                      <img src="../assets/img/icon/count-icon1.svg" alt="Active Cases Icon" />
                    </div>
                    <div className="captions">
                      <span className="counter">35</span>
                      <span className="plus">+</span>
                      <p className="color-green">Current Active Cases</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="single-counter d-flex align-items-center">
                    <div className="counter-img">
                      <img src="assets/img/icon/count-icon2.svg" alt="People Joined Icon" />
                    </div>
                    <div className="captions">
                      <span className="counter">12</span>
                      <span className="plus">m</span>
                      <p className="color-green">Community Members Engaged</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="single-counter d-flex align-items-center">
                    <div className="counter-img">
                      <img src="../assets/img/icon/count-icon3.svg" alt="Cases Every Year Icon" />
                    </div>
                    <div className="captions">
                      <span className="counter">200</span>
                      <span className="plus">m</span>
                      <p className="color-green">Annual Cases Addressed</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="single-counter d-flex align-items-center">
                    <div className="counter-img">
                      <img src="assets/img/icon/count-icon4.svg" alt="People Helped Icon" />
                    </div>
                    <div className="captions">
                      <span className="counter">1200</span>
                      <p className="color-green">Individuals Supported by Our Services</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* We Serve for People */}
    <div className="our-services section-padding position-relative">
      <div className="container">
        <div className="row justify-content-sm-center">
          <div className="col-xl-7 col-lg-8 col-md-11">
            <div className="section-title text-center mb-70">
              <h2>We Serve for People</h2>
              <p>
                At Lotus Gyan Ganga Welfare Society, we are committed to uplifting underprivileged communities through education and essential resources.
                <br />Join us in making a difference.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div className="single-services text-center mb-30">
              <div className="services-icon">
              <FontAwesomeIcon icon={faGraduationCap} size="3x" color="#007bff" />
              </div>
              <div className="services-cap">
                <h5><a href="#">Education</a></h5>
                <p>We provide free education to underprivileged children, empowering them with knowledge and skills for a brighter future.</p>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div className="single-services text-center mb-30">
              <div className="services-icon">
              <FontAwesomeIcon icon={faLaptop} size="3x" color="#007bff" />
              </div>
              <div className="services-cap">
                <h5><a href="#">Computer Skills</a></h5>
                <p>We equip children with essential computer skills, preparing them for the digital age and enhancing their future opportunities.</p>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div className="single-services text-center mb-30">
              <div className="services-icon">
              <FontAwesomeIcon icon={faHandsHelping} size="3x" color="#007bff" />;
              </div>
              <div className="services-cap">
                <h5><a href="#">Community Support</a></h5>
                <p>We engage with local communities to provide support and resources, fostering a sense of unity and collaboration.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* They need help */}
    <div className="emargency-care section-img-bg2" style={{ backgroundImage: `url(${sectionbg2})` }}>
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-xl-6 col-lg-8 col-md-9 col-sm-12">
            <div className="single-emargency">
              <div className="emargency-cap">
                <h5><a href="#">They need your help</a></h5>
                <p>Sedac odio aliquet, fringilla odio eget, tincidunt nunc. Duis aliquet pulvinar ante tempor etiam lacus eros</p>
                <p className="emargenc-cap">Sedac odio aliquet, fringilla odio eget, tincidunt nunc. Duis aliquet pulvinar ante tempor etiam lacus eros</p>
                <a href="#" className="btn loan-btn">Donate in a Case</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Join us */}
    <div className="join-us-area section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-4 col-lg-5 col-md-10">
            <div className="joing-details">
              <div className="section-title">
                <h2>Join Us in Empowering Students</h2>
              </div>
              <p>
                At our NGO, we are dedicated to providing free education and essential computer skills to students in need. Our mission is to equip young minds with the tools and knowledge they need to succeed in a digital world. By joining us, you contribute to creating opportunities and fostering a brighter future for many. Together, we can make a significant impact.
              </p>
              <a href="about.html" className="btn about-btn">Join Now</a>
            </div>
          </div>
          <div className="offset-xl-1 col-xl-4 col-lg-4 col-md-7 col-sm-7">
            <div className="joning-img">
              <img src={joining1} alt="Students in a classroom" className="w-100" />
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-5 col-sm-5">
            <div className="joning-img">
              <img src={joining2} alt="Computer skills training session" className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
