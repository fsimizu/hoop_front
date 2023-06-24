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

                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">



                            <div className="carousel-inner text-white">
                                <div className="carousel-item active" id="carousel-item-1">
                                    <div className="carousel-item-text background-blue">
                                        <div className="carousel-item-header">Life stories</div>
                                        <div>Stars</div>
                                        <div>-------</div>
                                        <div className="carousel-item-subheader">Testimony Rodrigo:</div>
                                        <p>I like HOOP, because I like English and I love being with the teachers. It’s very important to learn English, and HOOP also offers lots of activities for all ages!</p>
                                    </div>
                                </div>

                                <div className="carousel-item" id="carousel-item-2">
                                    <div className="carousel-item-text background-red">
                                        <div className="carousel-item-header">Life stories</div>
                                        <div>Stars</div>
                                        <div>-------</div>
                                        <div className="carousel-item-subheader">Testimony Rodrigo:</div>
                                        <p>I like HOOP, because I like English and I love being with the teachers. It’s very important to learn English, and HOOP also offers lots of activities for all ages!</p>
                                    </div>
                                </div>


                                <div className="carousel-item" id="carousel-item-3">
                                    <div className="carousel-item-text background-yellow">
                                        <div className="carousel-item-header">Life stories</div>
                                        <div>Stars</div>
                                        <div>-------</div>
                                        <div className="carousel-item-subheader">Testimony Rodrigo:</div>
                                        <p>I like HOOP, because I like English and I love being with the teachers. It’s very important to learn English, and HOOP also offers lots of activities for all ages!</p>
                                    </div>
                                </div>

                                <div className="carousel-item" id="carousel-item-4">
                                    <div className="carousel-item-text background-green">
                                        <div className="carousel-item-header">Life stories</div>
                                        <div>Stars</div>
                                        <div>-------</div>
                                        <div className="carousel-item-subheader">Testimony Rodrigo:</div>
                                        <p>I like HOOP, because I like English and I love being with the teachers. It’s very important to learn English, and HOOP also offers lots of activities for all ages!</p>
                                    </div>
                                </div>

                            </div>

                             <ol class="carousel-indicators"> {/*//tiene que estar adentro del carousel para que cambie el color */}
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                            </ol>

                        </div>

  
                    </div>
                    

                    <div className="col-12 col-lg-6 section__top-margin">
                        <div className="ourResults__item-container" >
                            <div className="ourResults__icon">
                                <img src="/images/results_icon1.svg" alt="" />
                            </div>
                            <div className="ourResults__text">
                                <p><strong>50</strong> Volunteers & <strong>8</strong> staff members</p>
                            </div>
                        </div>
                        <div className="ourResults__item-container" >
                            <div className="ourResults__icon">
                                <img src="/images/results_icon2.svg" alt="" />
                            </div>
                            <div className="ourResults__text">
                                <p><strong>140</strong> Students</p>
                            </div>
                        </div>
                        <div className="ourResults__item-container" >
                            <div className="ourResults__icon">
                                <img src="/images/results_icon3.svg" alt="" />
                            </div>
                            <div className="ourResults__text">
                                <p><strong>230</strong> Families supported</p>
                            </div>
                        </div>
                        <div className="ourResults__item-container" >
                            <div className="ourResults__icon">
                                <img src="/images/results_icon4.svg" alt="" />
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