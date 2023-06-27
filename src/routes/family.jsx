import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { HeroCommon } from "../components/HeroCommon";

export function Family() {

  return (
    <div>
      <Navbar />
      <HeroCommon background={"/images/family_hero.png"} title="Family"/>
      <Footer />
    </div>
  );
}

