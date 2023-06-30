import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { HeroCommon } from "../components/HeroCommon";
import { OurImpact } from "../components/OurImpact";
import { EducationInitiatives } from "../components/EducationInitiatives";
import { SocialMedia } from "../components/SocialMedia";
import { GetInvolvedBtn } from "../components/GetInvolvedBtn";


export function Education() {

  return (
    <div>
      <Navbar />
      <SocialMedia />
      <GetInvolvedBtn />
      <HeroCommon background={"/images/education_hero.jpg"} title="Education"/>
      <div className="text-main text-main-container">
        We believe that <strong>education is the pillar to improving the lives of our community members</strong>, which is why we <strong>offer support</strong> for <strong>children, adolescents and adults</strong>. Helping the young ones overcome academic difficulties, and motivating the adults who haven’t concluded their education to do so through our alliance with CEBA Micaela Bastidas. Our multiple allies help us offer different types of options for our community, so they can see <strong>new ways to pursue their education and better their lives.</strong>
      </div>
      <EducationInitiatives />
      <OurImpact />
      <Footer />
    </div>
  );
}

