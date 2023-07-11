import React from "react";
import GoalsHoop from "../components/GoalsHoop/GoalsHoop";
import { HeroCommon } from "../components/HeroCommon";
import { Partners } from "../components/HoopPartners";
import OurPrograms from "../components/OurPrograms/OurPrograms";
import Timeline from "../components/Timeline/Timeline";
import { Layout } from "../layout/Layout.jsx";


export function OurWork() {

  return (
    <div>
      <Layout>
        <GetInvolvedBtn />
        <HeroCommon background={"/images/ourWork/heroOurWork.jpg"} title="Our work" />
        <Timeline/>
        <OurPrograms/>
        <GoalsHoop />
        <Partners/>
      </Layout>
    </div>
  );
}

