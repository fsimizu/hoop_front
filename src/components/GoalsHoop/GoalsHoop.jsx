import React from 'react'
import "./goalsHoop.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GoalsHoop = () => {

    let settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,

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
            <section className='container goalsHoop'>
                <h2>Hoop and the SDGS</h2>
                <h3>Goals for the year 2023</h3>
                <Slider {...settings2} >
                    <div className='sliderGoals'>
                        <div className='goalImg'>
                            <img src="./images/ourWork/carousel1.png" alt="" />
                        </div>
                        <div className='goalDesription'>
                            <h4>1. No poverty</h4>
                            <p>We’re constantly advising the families of the community regarding topics such as health and wellbeing, in order to improve their quality of life, reduce their vulnerabilities and increase to ongoing changes and risks.</p>
                        </div>
                    </div>
                    <div className='sliderGoals'>
                        <div className='goalImg'>
                            <img src="./images/ourWork/carousel1.png" alt="" />
                        </div>
                        <div className='goalDesription'>
                            <h4>1. No poverty</h4>
                            <p>We’re constantly advising the families of the community regarding topics such as health and wellbeing, in order to improve their quality of life, reduce their vulnerabilities and increase to ongoing changes and risks.</p>
                        </div>
                    </div>
                    <div className='sliderGoals'>
                        <div className='goalImg'>
                            <img src="./images/ourWork/carousel1.png" alt="" />
                        </div>
                        <div className='goalDesription'>
                            <h4>1. No poverty</h4>
                            <p>We’re constantly advising the families of the community regarding topics such as health and wellbeing, in order to improve their quality of life, reduce their vulnerabilities and increase to ongoing changes and risks.</p>
                        </div>
                    </div>
                    <div className='sliderGoals'>
                        <div className='goalImg'>
                            <img src="./images/ourWork/carousel1.png" alt="" />
                        </div>
                        <div className='goalDesription'>
                            <h4>1. No poverty</h4>
                            <p>We’re constantly advising the families of the community regarding topics such as health and wellbeing, in order to improve their quality of life, reduce their vulnerabilities and increase to ongoing changes and risks.</p>
                        </div>
                    </div>
                </Slider>

            </section>
    </>
  )
}

export default GoalsHoop