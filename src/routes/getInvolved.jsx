import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { HeroCommon } from "../components/HeroCommon";
import { Donate } from "../components/Donate";
import { SocialMedia } from "../components/SocialMedia";


export function GetInvolved() {
  return (
    <div>
      <Navbar />
      <SocialMedia />
      <HeroCommon background={"/images/getInvolved_hero.png"} title="Get involved" />
      <Donate />
      <Footer />
    </div>
  );
}
