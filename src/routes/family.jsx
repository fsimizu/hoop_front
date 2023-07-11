import React from "react";
import { GetInvolvedBtn } from "../components/GetInvolvedBtn";
import { HeroCommon } from "../components/HeroCommon";
import { OurImpact } from "../components/OurImpact";
import { OurInitiatives } from "../components/OurInitiatives";
import { Layout } from "../layout/Layout.jsx";



export function Family() {

  return (
    <div>
      <Layout>
        <GetInvolvedBtn />
        <HeroCommon background={"/images/family_hero.jpg"} title="Family"/>
        <div className="text-main text-main-container">
          To continue promoting the independent development of the community, and to push their own progress, we support them by giving them access to workshops in topics such as administration and generation of different products and services according to their abilities and talents. Thus fostering their autonomy and professional development. We also offer assistance in legal or medical emergencies, as well as the management of donations that enter through allied companies.
        </div>
        <OurInitiatives />
        <OurImpact />
      </Layout>
    </div>
  );
}

