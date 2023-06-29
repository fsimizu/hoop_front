import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { HeroCommon } from "../components/HeroCommon";
import { OurImpact } from "../components/OurImpact";

export function Community() {

  return (
    <div>
      <Navbar />
      <HeroCommon background={"/images/community_hero.png"} title="Community"/>
      <OurImpact />
      <Footer />
    </div>
  );
}
