import React from 'react'
import { Link } from "react-router-dom";
import GoogleMap from '../utility/GoogleMap';
import PageBanner from '../utility/PageBanner';


export default function Contact() {
  return (
    <div>
        <main>
            <PageBanner />
            <section class="contact-section">

                <div class="d-none d-sm-block mb-5 pb-4">

                    <div class="row">
                    <div class="col-12">
                        <h2 class="contact-title">&emsp; Get in Touch</h2>
                    </div>
                    <div class="col-lg-8">
                        <GoogleMap />
                    </div>
                    <div class="col-lg-3 offset-lg-1">
                        <div class="media contact-info">
                            <span class="contact-info__icon"><i class="ti-home"></i></span>
                            <div class="media-body">
                            <h3>ITI Road NIT Faridabad</h3>
                            <p>Haryana, India 121001</p>
                            </div>
                        </div>
                        <div class="media contact-info">
                            <span class="contact-info__icon"><i class="ti-tablet"></i></span>
                            <div class="media-body">
                            <h3><Link t0="tel:000000"> +91 00000000</Link></h3>
                            <p>Mon to Fri 9am to 6pm</p>
                            </div>
                        </div>
                        <div class="media contact-info">
                            <span class="contact-info__icon"><i class="ti-email"></i></span>
                            <div class="media-body">
                                <h3><Link to="mailto:lotusgyangangawelfaresociety@gmail.com">lotusgyangangawelfaresociety@gmail.com </Link></h3>
                                <p>Send us your query anytime!</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
  )
}
