import React from "react";
import './ourInitiatives.css';
import { HeroCommon } from "../HeroCommon";

export function OurInitiatives() {
    return (
        <div className="">
            <h2 className="section__header">Our initiatives</h2>
            <img className="section__underline" src="/images/underline.svg" alt="" />
            <HeroCommon background={"/images/family_hero.png"} title="I hear you, I'm with you!" />
            <div className="text-main text-main-container">
            HOOP promotes mental health within families by matching registered psychologists that volunteer their services and provide telephonic company to the community families that ask for it. We believe this emotional support is key to the development of the community and our organization. 
            </div>
        </div>
)}