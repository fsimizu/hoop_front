import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { HeroCommon } from "../components/HeroCommon";

export function Community() {

  return (
    <div>
      <Navbar />
      <HeroCommon background={"/images/community_hero.png"} title="Community"/>
      <Footer />
    </div>
  );
}
