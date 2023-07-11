import React from "react";
import { Donate } from "../components/Donate";
import { HeroCommon } from "../components/HeroCommon";
import { Layout } from "../layout/Layout.jsx";

export function GetInvolved() {
  return (
    <div>
      <Layout>
        <HeroCommon background={"/images/heroGetInvolved.png"} title="Get involved" />
        <Donate />
      </Layout>
    </div>
  );
}
