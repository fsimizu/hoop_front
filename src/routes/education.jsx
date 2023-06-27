import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { HeroCommon } from "../components/HeroCommon";

export function Education() {

  return (
    <div>
      <Navbar />
      <HeroCommon background={"/images/education_hero.png"} title="Education"/>
      <Footer />
    </div>
  );
}

