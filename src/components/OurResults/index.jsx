import React from "react";
import './ourResults.css';

export function OurResults() {
    return (
        <div className="ourResults__container">
            <div className="container">
                <h2 className="section__header">Our results</h2>
                <img className="section__underline" src="/images/underline.svg" alt="" />

                <div className="row">

                    <div className="col-12 col-lg-6 section__top-margin">
                        <img id="ourResults__image" src="placeholder.png" alt="image" />
                    </div>
                    
                    <div className="col-12 col-lg-6 section__top-margin">
                        <div className="ourResults__item-container" >
                            <div className="ourResults__icon">
                                <img src="/images/vision_icon1.svg" alt="" />
                            </div>
                            <div className="ourResults__text">
                                <p><strong>50</strong> Volunteers & <strong>8</strong> staff members</p>
                            </div>
                        </div>
                        <div className="ourResults__item-container" >
                            <div className="ourResults__icon">
                                <img src="/images/vision_icon1.svg" alt="" />
                            </div>
                            <div className="ourResults__text">
                                <p><strong>140</strong> Students</p>
                            </div>
                        </div>
                        <div className="ourResults__item-container" >
                            <div className="ourResults__icon">
                                <img src="/images/vision_icon1.svg" alt="" />
                            </div>
                            <div className="ourResults__text">
                                <p><strong>230</strong> Families supported</p>
                            </div>
                        </div>
                        <div className="ourResults__item-container" >
                            <div className="ourResults__icon">
                                <img src="/images/vision_icon1.svg" alt="" />
                            </div>
                            <div className="ourResults__text">
                                <p><strong>5</strong> International offices around the world <br /><em>(US, Germany, France, Austria, UK)</em></p>
                            </div>
                        </div>
                
                    </div>

                </div>
            </div>
        </div>
)}