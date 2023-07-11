import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import ContentVolunteer from "../components/ContentVolunteer/ContentVolunteer";
import { Volunteers } from "../components/Volunteers";
import {HeroCommon} from "../components/HeroCommon"
import HoopVolunteers from "../components/HoopVolunteers/HoopVolunteers";
import { SocialMedia } from "../components/SocialMedia";
import { GetInvolvedBtn } from "../components/GetInvolvedBtn";
import { Layout } from "../layout/Layout.jsx";


export function Volunteer() {

  return (
    <div>
      <Layout>
        <GetInvolvedBtn />
        <HeroCommon background={"/images/volunteer_hero.png"} title="Volunteer"/>
        <ContentVolunteer />
        <HoopVolunteers/>
      </Layout>
    </div>
  );
}

