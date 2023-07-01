import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { HeroCommon } from "../components/HeroCommon";
import { OurImpact } from "../components/OurImpact";
import { SocialMedia } from "../components/SocialMedia";
import { GetInvolvedBtn } from "../components/GetInvolvedBtn";
import { OurProjects } from "../components/OurProjects";

export function Community() {

  return (
    <div>
      <Navbar />
      <SocialMedia />
      <GetInvolvedBtn />
      <HeroCommon background={"/images/community_hero.jpg"} title="Community"/>
      <div className="text-main text-main-container">
      To continue promoting the <strong>independent development of the community</strong>, and to push their own progress, we support them by <strong>giving them access to workshops</strong> in topics such as <strong>administration</strong> and generation of <strong>different products and services</strong> according to their abilities and talents. Thus fostering their autonomy and professional development. We also <strong>offer assistance in legal or medical emergencies</strong>, as well as the <strong>management of donations</strong> that enter <strong>through allied companies.</strong>
      </div>
      <OurProjects />
      <OurImpact />
      <Footer />
    </div>
  );
}
