import React from "react";
import { AboutUs } from "../components/AboutUs";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Partners } from "../components/HoopPartners";
import { Navbar } from "../components/Navbar";
import { OurVision } from "../components/OurVision";
import { OurWork } from "../components/OurWork";
import { SocialMedia } from "../components/SocialMedia";


export function Root() {

  return (
    <div>
      <SocialMedia />
      <Navbar />
      <Hero />
      <AboutUs />
      <OurVision />
      <OurWork />
      <Partners />
      <Footer />
    </div>
  );
}
