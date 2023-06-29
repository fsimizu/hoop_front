import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { HeroCommon } from "../components/HeroCommon";
import { OurImpact } from "../components/OurImpact";
import { EducationInitiatives } from "../components/EducationInitiatives";

export function Education() {

  return (
    <div>
      <Navbar />
      <HeroCommon background={"/images/education_hero.png"} title="Education"/>
      <EducationInitiatives />
      <OurImpact />
      <Footer />
    </div>
  );
}

