import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import ContentVolunteer from "../components/ContentVolunteer/ContentVolunteer";
import { Volunteers } from "../components/Volunteers";
import {HeroCommon} from "../components/HeroCommon"
import HoopVolunteers from "../components/HoopVolunteers/HoopVolunteers";
import { SocialMedia } from "../components/SocialMedia";


export function Volunteer() {

  return (
    <div>
      <Navbar />
      <SocialMedia />
      <HeroCommon background={"/images/volunteer_hero.png"} title="Volunteer"/>
      <ContentVolunteer />
      <HoopVolunteers/>
      {/* <Volunteers/> */}
      <Footer />
    </div>
  );
}

