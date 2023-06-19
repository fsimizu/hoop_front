import React from "react";
import { AboutUs } from "../components/AboutUs";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Partners } from "../components/HoopPartners";
import { Navbar } from "../components/Navbar";
import { OurWork } from "../components/OurWork";


export function Root() {

  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <OurWork />
      <Partners />
      <Footer />
    </div>
  );
}
