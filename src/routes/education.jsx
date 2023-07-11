import React from "react";
import { EducationInitiatives } from "../components/EducationInitiatives";
import { GetInvolvedBtn } from "../components/GetInvolvedBtn";
import { HeroCommon } from "../components/HeroCommon";
import { OurImpact } from "../components/OurImpact";
import { Layout } from "../layout/Layout.jsx";

export function Education() {

  return (
    <div>
      <Layout>
        <GetInvolvedBtn />
        <HeroCommon background={"/images/education_hero.jpg"} title="Education"/>
        <div className="text-main text-main-container">
          We believe that <strong>education is the pillar to improving the lives of our community members</strong>, which is why we <strong>offer support</strong> for <strong>children, adolescents and adults</strong>. Helping the young ones overcome academic difficulties, and motivating the adults who haven’t concluded their education to do so through our alliance with CEBA Micaela Bastidas. Our multiple allies help us offer different types of options for our community, so they can see <strong>new ways to pursue their education and better their lives.</strong>
        </div>
        <EducationInitiatives />
        <OurImpact />
      </Layout>
    </div>
  );
}

