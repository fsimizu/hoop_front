import React from "react";
import './ourVision.css';

export function OurVision() {
    return (
        <div className="ourVision__container">
            <div className="container">
                <div className="row">

                    <div className="col-12 col-lg-6 section__top-margin">
                        <img id="ourVision__image" src="/images/ourvision.png" alt="image" />
                    </div>
                    
                    <div className="col-12 col-lg-6 section__top-margin">

                        <div className="ourVision__item-container" >
                            <div className="ourVision__icon">
                                <img src="/images/vision_icon1.svg" alt="" />
                            </div>
                            <div className="ourVision__text">
                                <h3 className="ourVision__subheader">Our vision</h3>
                                <p><strong>To promote the comprehensive development of individuals and their families through education.</strong><br/>
                                We understand education as the promotion of knowledge through workshops, the development of skills and academic complementarity to improve people’s abilities.</p>
                            </div>
                        </div>
                        
                        <div className="ourVision__item-container" >
                            <div className="ourVision__icon">
                                <img src="/images/vision_icon2.svg" alt="" />
                            </div>
                            <div className="ourVision__text">
                                <h3 className="ourVision__subheader">Our mission</h3>
                                <p><strong>Families transforming communities.</strong><br/>
                                    Our goal is to provide people with the necessary tools for them to become the change agents within their own community and generate their own development.</p>
                            </div>
                        </div>

                        <div className="ourVision__item-container" >
                            <div className="ourVision__icon">
                                <img src="/images/vision_icon3.svg" alt="" />
                            </div>    
                            <div className="ourVision__text">
                                <h3 className="ourVision__subheader">Our values</h3>
                                <p>Collaboration, trust and dynamism</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
)}