import React from "react";
import './volunteer.js'
import './volunteers.css';

export function Volunteers() {
    return (
        <div className="volunteer__container container text-center my-3">
            <h2 className="section__header">HOOP volunteers</h2>
            <img className="section__underline" src="/images/underline.svg" alt="" />
            
            <div className="row mx-auto my-auto justify-content-center">
                <div id="recipeCarousel" className="volunteer__carousel carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                        <div className="volunteer__carousel-item carousel-item active">
                            <div className="col-md-3">
                                <div className="card">
                                    
                                    <div className="card-img">
                                        <img src="images/volunteer1.png" className="img-fluid" />
                                    </div>
                                    <div>
                                    “My time in Peru would not have been the same if not for the team and community at HOOP —the relationship between HOOP and the community of Flora Tristan is magical. HOOP is the gold standard of social service and education non-profit organizations; the staff and volunteers give every piece of their heart to their work!”
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="volunteer__carousel-item carousel-item">
                            <div className="col-md-3">
                                <div className="card">
                                    <div className="card-img">
                                        <img src="images/volunteer1.png" className="img-fluid" />
                                    </div>
                                    <div>
                                        “My time in Peru would not have been the same if not for the team and community at HOOP —the relationship between HOOP and the community of Flora Tristan is magical. HOOP is the gold standard of social service and education non-profit organizations; the staff and volunteers give every piece of their heart to their work!”
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="volunteer__carousel-item carousel-item">
                            <div className="col-md-3">
                                <div className="card">
                                <div className="card-img">
                                        <img src="images/volunteer1.png" className="img-fluid" />
                                    </div>
                                    <div>
                                        “My time in Peru would not have been the same if not for the team and community at HOOP —the relationship between HOOP and the community of Flora Tristan is magical. HOOP is the gold standard of social service and education non-profit organizations; the staff and volunteers give every piece of their heart to their work!”
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="volunteer__carousel-item carousel-item">
                            <div className="col-md-3">
                                <div className="card">
                                <div className="card-img">
                                        <img src="images/volunteer1.png" className="img-fluid" />
                                    </div>
                                    <div>
                                        “My time in Peru would not have been the same if not for the team and community at HOOP —the relationship between HOOP and the community of Flora Tristan is magical. HOOP is the gold standard of social service and education non-profit organizations; the staff and volunteers give every piece of their heart to their work!”
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="volunteer__carousel-item carousel-item">
                            <div className="col-md-3">
                                <div className="card">
                                <div className="card-img">
                                        <img src="images/volunteer1.png" className="img-fluid" />
                                    </div>
                                    <div>
                                        “My time in Peru would not have been the same if not for the team and community at HOOP —the relationship between HOOP and the community of Flora Tristan is magical. HOOP is the gold standard of social service and education non-profit organizations; the staff and volunteers give every piece of their heart to their work!”
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="volunteer__carousel-item carousel-item">
                            <div className="col-md-3">
                                <div className="card">
                                    <div className="card-img">
                                        <img src="https://via.placeholder.com/500x400/fc0?text=6" className="img-fluid" />
                                    </div>
                                    <div className="card-img-overlay">Slide 6</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    </a>
                    <a className="carousel-control-next bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    </a>
                </div>
            </div>
            <h5 className="mt-2 fw-light">advances one slide at a time</h5>
        </div>
    )
}

