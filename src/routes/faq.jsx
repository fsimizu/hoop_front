import React from "react";
import { Footer } from "../components/Footer";
import { HeroCommon } from "../components/HeroCommon";
import { Navbar } from "../components/Navbar";
import { SocialMedia } from "../components/SocialMedia";
import { GetInvolvedBtn } from "../components/GetInvolvedBtn";
import { FAQs } from "../components/FAQs";

export function FAQ() {
  return (
      <div>
          <Navbar />
          <SocialMedia />
          <GetInvolvedBtn />
          <HeroCommon background={"/images/faq.jpg"} title="FAQs" />
          <FAQs />
          <Footer />
      </div>
  );
}