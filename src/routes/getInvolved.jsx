import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { HeroCommon } from "../components/HeroCommon";

export function GetInvolved() {

  return (
    <div>
      <Navbar />
      <HeroCommon background={"/images/getInvolved_hero.png"} title="Get involved"/>
      <Footer />
    </div>
  );
}
