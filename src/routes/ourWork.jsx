import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { HeroCommon } from "../components/HeroCommon";
import RouteOurWork from "../components/RouteOurWork/RouteOurWork";

export function OurWork() {

  return (
    <div>
      <Navbar />
      <HeroCommon background={"/images/ourWork_hero.png"} title="Our work"/>
      <RouteOurWork/>
      <Footer />
    </div>
  );
}

