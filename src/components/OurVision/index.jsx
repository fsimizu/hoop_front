import React from "react";
import './ourVision.css';

export function OurVision() {
    return (
        <div className="ourVision__container">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img id="aboutUs__image" src="/placeholder.png" alt="image about us" />
                    </div>
                    <div className="col-12 col-md-6">
                        
                        <div className="OurVision__item-container" >
                            <img className="OurVision__icon" src="/images/vision_icon1.svg" alt="" />
                            <div className="OurVision__text">
                                <h3>Our vision</h3>
                                <p>To  promote the comprehensive development of individuals and their families through education. 
                                We understand education as the promotion of knowledge through workshops, the development of skills and academic complementarity to improve people’s abilities.</p>
                            </div>
                        </div>
                        
                        <div className="OurVision__item-container" >
                            <img className="OurVision__icon" src="/images/vision_icon2.svg" alt="" />
                            <div className="OurVision__text">
                                <h3>Our mission</h3>
                                <p>Families transforming communities.
                                    Our goal is to provide people with the necessary tools for them to become the change agents within their own community and generate their own development.</p>
                            </div>
                        </div>

                        <div className="OurVision__item-container" >
                            <img className="OurVision__icon" src="/images/vision_icon3.svg" alt="" />
                            <div className="OurVision__text">
                                <h3>Our values</h3>
                                <p>Collaboration, trust and dynamism</p>
                            </div>
                        </div>

                        <h2 className="section__header">About us</h2>
                        <p>Hoop is a NGO dedicated to work in communities communities in the northern cone of Arequipa developing projects focused on 3 main areas: 
                            <strong> Education, Family (psychology), Community (social work)</strong></p>
                        <p>HOOP was founded in 2012 by volunteers and staff of the Flora Tristan English School in Cerro Colorado. Families there had no access to basic services and it was sought to provide educational services to achieve a positive impact on the community.</p>
                        <p>Today former volunteers represento us in countries like Austria, France, Germany, Taiwan, England and the United States, suportin our organization and ensuring the sustainability of our work through grants and donations.</p>
                    </div>

                </div>
            </div>
        </div>
)}