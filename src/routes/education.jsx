import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { HeroCommon } from "../components/HeroCommon";
import { OurImpact } from "../components/OurImpact";
import { EducationInitiatives } from "../components/EducationInitiatives";
import { SocialMedia } from "../components/SocialMedia";


export function Education() {

  return (
    <div>
      <Navbar />
      <SocialMedia />
      <HeroCommon background={"/images/education_hero.jpg"} title="Education"/>
      <EducationInitiatives />
      <OurImpact />
      <Footer />
    </div>
  );
}

