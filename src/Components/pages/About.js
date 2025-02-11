import React from "react";
import About from '../assets/img/gallery/about.jpg';
import PageBanner from "../utility/PageBanner";
export default function AboutPage() {
  return (
    <>
      <main>
        <PageBanner />
        <div class="support-company-area section-padding">
          <div class="container">
            <div class="row align-items-center justify-content-between">
              <div class="col-xl-6 col-lg-6 col-md-10">
                <div class="support-location-img">
                  <img src={About} alt />
                </div>
              </div>
              <div class="col-xl-5 col-lg-6 col-md-10">
                <div class="right-caption">
                  <div class="section-tittle">
                    <h2>Who we are?</h2>
                  </div>
                  <div class="support-caption">
                    <p class="mb-10">
                      We came into existence in the year 2024 as the vision of
                      Ms. Malti. One day, she encountered children begging for
                      money, and when she spoke to them, she realized their deep
                      desire for food and education. Moved by their situation,
                      she took it upon herself to create a platform that would
                      provide them with learning opportunities and a brighter
                      future. Thus, Lotus Gyan Ganga Welfare Society was
                      founded—a registered NGO dedicated to empowering
                      underprivileged children through education and holistic
                      development. In addition to providing quality education,
                      we also ensure that these children receive nutritious
                      mid-day meals, supporting their overall well-being and
                      growth.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-xl-5 col-lg-6 col-md-10">
                <div class="right-caption">
                  <div class="section-tittle">
                    <h2>Mission</h2>
                  </div>
                  <div class="support-caption">
                    <p class="mb-10">
                    Lotus Gyan Ganga Welfare Society is committed to empowering underprivileged children by providing them with education, skill development, nutritious meals, and essential life skills. Our mission is to eradicate illiteracy and hunger by ensuring that every child, regardless of their background, has access to quality learning opportunities and a healthy upbringing. We strive to create a society where children can dream, learn, and grow into responsible and self-reliant individuals.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-xl-5 col-lg-6 col-md-10">
                <div class="right-caption">
                  <div class="section-tittle">
                    <h2>Our Vision</h2>
                  </div>
                  <div class="support-caption">
                    <p class="mb-10">
                    Our vision is to build a future where no child is deprived of education or basic necessities due to poverty. We aim to create an inclusive and sustainable society where education becomes a fundamental right for every child, and hunger is no longer a barrier to learning. Through our efforts, we envision a world where children are empowered with knowledge, confidence, and opportunities to lead a better life.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
