import React from "react";
import { GetInvolvedBtn } from "../components/GetInvolvedBtn";
import { HeroCommon } from "../components/HeroCommon";
import { OurImpact } from "../components/OurImpact";
import { OurProjects } from "../components/OurProjects";
import { Layout } from "../layout/Layout.jsx";

export function Community() {

  return (
    <div>
      <Layout>
        <GetInvolvedBtn />
        <HeroCommon background={"/images/community_hero.jpg"} title="Community"/>
        <div className="text-main text-main-container">
        To continue promoting the <strong>independent development of the community</strong>, and to push their own progress, we support them by <strong>giving them access to workshops</strong> in topics such as <strong>administration</strong> and generation of <strong>different products and services</strong> according to their abilities and talents. Thus fostering their autonomy and professional development. We also <strong>offer assistance in legal or medical emergencies</strong>, as well as the <strong>management of donations</strong> that enter <strong>through allied companies.</strong>
        </div>
        <OurProjects />
        <OurImpact />
      </Layout>
    </div>
  );
}
