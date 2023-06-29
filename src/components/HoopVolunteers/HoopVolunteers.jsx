import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./hoopVolunteers.css"

const HoopVolunteers = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,

                }
            }
        ]
    };


    return (
        <>
<section id='Volunteers'>
<div className='container volunteers'>
    <h2>Hoop Volunteers</h2>
    <img className="section__underline" src="/images/underline.svg" alt="" />
    <Slider {...settings} >
        <div className='slider'>
        <div className="card">
                                    
                                    <div className="card-img">
                                        <img src="images/volunteer1.png" className="img-fluid" />
                                    </div>
                                    <div>
                                    “My time in Peru would not have been the same if not for the team and community at HOOP —the relationship between HOOP and the community of Flora Tristan is magical. HOOP is the gold standard of social service and education non-profit organizations; the staff and volunteers give every piece of their heart to their work!”
                                    </div>

                                </div>
        </div>
        <div className='slider'>
        <div className="card">
                                    
                                    <div className="card-img">
                                        <img src="images/volunteer1.png" className="img-fluid" />
                                    </div>
                                    <div>
                                    “My time in Peru would not have been the same if not for the team and community at HOOP —the relationship between HOOP and the community of Flora Tristan is magical. HOOP is the gold standard of social service and education non-profit organizations; the staff and volunteers give every piece of their heart to their work!”
                                    </div>

                                </div>
        </div>
        <div className='slider'>
        <div className="card">
                                    
                                    <div className="card-img">
                                        <img src="images/volunteer1.png" className="img-fluid" />
                                    </div>
                                    <div>
                                    “My time in Peru would not have been the same if not for the team and community at HOOP —the relationship between HOOP and the community of Flora Tristan is magical. HOOP is the gold standard of social service and education non-profit organizations; the staff and volunteers give every piece of their heart to their work!”
                                    </div>

                                </div>
        </div>
        <div className='slider'>
        <div className="card">
                                    
                                    <div className="card-img">
                                        <img src="images/volunteer1.png" className="img-fluid" />
                                    </div>
                                    <div>
                                    “My time in Peru would not have been the same if not for the team and community at HOOP —the relationship between HOOP and the community of Flora Tristan is magical. HOOP is the gold standard of social service and education non-profit organizations; the staff and volunteers give every piece of their heart to their work!”
                                    </div>

                                </div>
        </div>
    </Slider>
</div>
</section>
        </>
    )
}

export default HoopVolunteers