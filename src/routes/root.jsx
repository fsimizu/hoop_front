import React from "react";
import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { AboutUs } from "../components/AboutUs";
import { OurWork } from "../components/OurWork";
import { Partners } from "../components/HoopPartners";


export function Root() {

  return (
    <div>
      <Navbar />
      <h1>HOOP ONG</h1>
      <AboutUs />
      <OurWork />
      <Partners />
      <Container />

      <Footer />
    </div>
  );
}
