import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { HeroCommon } from "../components/HeroCommon";
import GoalsHoop from "../components/GoalsHoop/GoalsHoop";
import OurPrograms from "../components/OurPrograms/OurPrograms";
import { Partners } from "../components/HoopPartners";
import Timeline from "../components/Timeline/Timeline";
import { SocialMedia } from "../components/SocialMedia";
import { GetInvolvedBtn } from "../components/GetInvolvedBtn";



export function OurWork() {

  return (
    <div>
      <Navbar />
      <HeroCommon background={"/images/ourWork/heroOurWork.jpg"} title="Our work" />
      <Timeline/>
      <SocialMedia />
      <GetInvolvedBtn />
      <HeroCommon background={"/images/ourWork_hero.png"} title="Our work" />
      <OurPrograms/>
      <GoalsHoop />
      <Partners/>
      <Footer />
    </div>
  );
}

