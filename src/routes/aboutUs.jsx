import React from "react";
import ContentAboutUs from "../components/ContentAboutUs/ContentAboutUs";
import { GetInvolvedBtn } from "../components/GetInvolvedBtn";
import { HeroCommon } from "../components/HeroCommon";
import OurPurposeImpact from "../components/OurPurposeImpact/OurPurposeImpact";
import { OurResults } from "../components/OurResults";
import OurTeam from "../components/OurTeam/OurTeam";
import { Layout } from "../layout/Layout.jsx";

export function AboutUs() {

  return (
    <div>
      <Layout>
        <GetInvolvedBtn />
        <HeroCommon background={"/images/aboutUs/heroAbout.png"} title="Our Story" />
        <ContentAboutUs />
        <OurResults title="Community Testimony" />
        <OurPurposeImpact />
        <OurTeam />
      </Layout>
    </div>
  );
}

