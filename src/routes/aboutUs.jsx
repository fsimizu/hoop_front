import React from "react";
import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";


export function AboutUs() {

  return (
    <div>
      <Navbar />
      {/* <div className="hero__container p-5 bg-image">
            <div className="container">
                <div className="d-flex justify-content-end h-100" style={{}} >
                        <div className="text-right text-white col-lg-4">
                            <h4 className="mb-3 hero__we-are">We are</h4>
                            <img src="/images/hero_logo.png" alt="" />
                            <p className="mb-3">Helping Overcome Obstacles Peru</p>
                            <h4 className="mb-3 hero__text">An NGO working with communities in the <span class="hero__yellow-text">cono norte of Arequipa Peru.</span></h4>
                        </div>
                </div>
            </div>

            
        </div> */}
      <Container />
      <Footer />
    </div>
  );
}

