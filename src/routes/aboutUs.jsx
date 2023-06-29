import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { HeroCommon } from "../components/HeroCommon";
import ContentAboutUs from "../components/ContentAboutUs/ContentAboutUs";
import OurPurposeImpact from "../components/OurPurposeImpact/OurPurposeImpact";
import { OurResults } from "../components/OurResults";
import OurTeam from "../components/OurTeam/OurTeam";

export function AboutUs() {

  return (
    <div>
      <Navbar />
      <HeroCommon background={"/images/aboutUs/heroAbout.png"} title="Our Story" />
      <ContentAboutUs />
      <OurResults title="Community Testimony" />
      <OurPurposeImpact />
      <OurTeam />
      <Footer />
    </div>
  );
}

