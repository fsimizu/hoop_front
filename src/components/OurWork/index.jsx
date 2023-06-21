import React from "react";
import './ourWork.css';

export function OurWork() {
    return (
        <div className="ourWork__container">
            <div className="container">

                <h2 className="section__header">Our work</h2>
                <img className="section__underline" src="/images/underline.svg" alt="" />

                <div className="ourWork__cards justify-content-center">
                    <div className="ourWork__card-container">
                        <img src="/images/icon_blue.png" className="ourWork__icons" id="icon_blue" alt="" />
                        <div className="card ourWork__card-content overflow-hidden">
                            <img className="card-img-top" src="/images/card_blue.png" alt="education" />
                            <div className="card-body card_blue">
                                <h5 className="card-title">Education</h5>
                                <p className="card-text">We provide free English and coding classes for children between 6 and 17 years old, primary and secondary education for adults.</p>
                                <div className="ourWork__readMore"><a href="#" className="btn btn-outline-light">Read more</a></div>                 
                            </div>
                        </div>
                    </div>
                    <div className="ourWork__card-container">
                        <img src="/images/icon_red.png" className="ourWork__icons" alt="" />
                        <div className="card ourWork__card-content overflow-hidden">
                            <img className="card-img-top" src="/images/card_red.png" alt="family" />
                            <div className="card-body card_red">
                                <h5 className="card-title">Family</h5>
                                <p className="card-text">We promote and raise awareness about mental and physical health through psychoeducational workshops and activities to achieve self-knowledge, emotional management and well-being </p>
                                <div className="ourWork__readMore" ><a href="#" className="btn btn-outline-light">Read more</a></div> 
                            </div>
                        </div>
                    </div>
                    <div className="ourWork__card-container">
                        <img src="/images/icon_green.png" className="ourWork__icons" alt="" />
                        <div className="card ourWork__card-content overflow-hidden">
                            <img className="card-img-top" src="/images/card_green.png" alt="community" />
                            <div className="card-body card_green">
                                <h5 className="card-title">Community</h5>
                                <p className="card-text">We give consultation and training in composting and knitting that create opportunities for the communities that manage these projects.</p>
                                <div className="ourWork__readMore"><a href="#" className="btn btn-outline-light">Read more</a></div> 
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
)}