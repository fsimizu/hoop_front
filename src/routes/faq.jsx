import React from "react";
import { FAQs } from "../components/FAQs";
import { GetInvolvedBtn } from "../components/GetInvolvedBtn";
import { HeroCommon } from "../components/HeroCommon";
import { Layout } from "../layout/Layout.jsx";

export function FAQ() {
  return (
      <div>
          <Layout>
            <GetInvolvedBtn />
            <HeroCommon background={"/images/faq.jpg"} title="FAQs" />
            <FAQs />
          </Layout>
      </div>
  );
}