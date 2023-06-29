import React from "react";
import './ourImpact.css';


export function OurImpact() {
    return (
        <div className="">
            <h2 className="section__header">Our impact</h2>
            <img className="section__underline" src="/images/underline.svg" alt="" />
            <div className="text-main text-main-container">
                Learn how these projects have impacted the community by reading these reports.
            </div>

            <div className="ourImpact__cards justify-content-center">
                <div className="card">
                    <div className="ourImpact__card-content background-gray overflow-hidden ">
                        <img src="/images/ourImpact_icon1.svg" alt="" />
                        <h2>Report 1</h2>
                    </div>
                    <div>
                        <a href="#" className="ourImpact__readMore btn btn-secondary">Read more</a>
                    </div>
                </div>

                <div className="card">
                    <div className="ourImpact__card-content background-gray overflow-hidden ">
                        <img src="/images/ourImpact_icon2.svg" alt="" />
                        <h2>Report 2</h2>
                    </div>
                    <div>
                        <a href="#" className="ourImpact__readMore btn btn-secondary">Read more</a>
                    </div>
                </div>

                <div className="card">
                    <div className="ourImpact__card-content background-gray overflow-hidden ">

                        <img src="/images/ourImpact_icon3.svg" alt="" />
                        <h2>Report 3</h2>

                    </div>
                    <div>
                        <a href="#" className="ourImpact__readMore btn btn-secondary">Read more</a>
                    </div>
                </div>
            </div>

        </div>
)}