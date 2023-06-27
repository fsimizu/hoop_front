import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import RouteVolunteer from "../components/RouteVolunteer/RouteVolunteer";
// import { Volunteers } from "../components/Volunteers";
// import { HeroCommon } from "../components/HeroCommon";

export function Volunteer() {

  return (
    <div>
      <Navbar />
      <RouteVolunteer />
      <HeroCommon background={"/images/volunteer_hero.png"} title="Volunteer"/>
      <Volunteers />
      <Footer />
    </div>
  );
}

