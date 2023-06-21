import React from "react";
import { AboutUs } from "../components/AboutUs";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Partners } from "../components/HoopPartners";
import { Navbar } from "../components/Navbar";
import { OurWork } from "../components/OurWork";
import { Mission } from "../components/Mission";
import { SocialMedia } from "../components/SocialMedia";
import { OurVision } from "../components/OurVision";


export function Root() {

  return (
    <div>
      <SocialMedia />
      <Navbar />
      <Hero />
      <AboutUs />
      <OurVision />
      <Mission />
      <OurWork />
      <Partners />
      <Footer />
    </div>
  );
}
