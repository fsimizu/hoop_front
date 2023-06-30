import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { HeroCommon } from "../components/HeroCommon";
import GoalsHoop from "../components/GoalsHoop/GoalsHoop";
import OurPrograms from "../components/OurPrograms/OurPrograms";
import { Partners } from "../components/HoopPartners";


export function OurWork() {

  return (
    <div>
      <Navbar />
      <HeroCommon background={"/images/ourWork/heroOurWork.jpg"} title="Our work" />
      <OurPrograms/>
      <GoalsHoop />
      <Partners/>
      <Footer />
    </div>
  );
}

