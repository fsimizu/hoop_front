import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import RouteAboutUs from "../components/RouteAboutUs/RouteAboutUs";


export function AboutUs() {

  return (
    <div>
      <Navbar />
     <RouteAboutUs/>
      <Footer />
    </div>
  );
}

