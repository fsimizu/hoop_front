import React from "react";
import './partners.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Partners() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
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
<section id='sponsors'>
<div className='container sponsors'>
    <h2> Become a sponsor</h2>
    <img className="section__underline" src="/images/underline.svg" alt="" />
    <Slider {...settings} >
        <div className='slider'>
            <img src="./images/ourWork/sponsor1.png" alt="" />
        </div>
        <div className='slider'>
            <img src="./images/ourWork/sponsor2.png" alt="" />
        </div>
        <div className='slider'>
            <img src="./images/ourWork/sponsor3.png" alt="" />
        </div>
        <div className='slider'>
            <img src="./images/ourWork/sponsor4.png" alt="" />
        </div>
    </Slider>
</div>
</section>
)}