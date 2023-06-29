import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { HeroCommon } from "../components/HeroCommon";
import { OurImpact } from "../components/OurImpact";
import { SocialMedia } from "../components/SocialMedia";

export function Community() {

  return (
    <div>
      <Navbar />
      <SocialMedia />
      <HeroCommon background={"/images/community_hero.jpg"} title="Community"/>
      <OurImpact />
      <Footer />
    </div>
  );
}
