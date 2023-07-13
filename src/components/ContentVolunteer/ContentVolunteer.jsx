import React from 'react'
import "./routeVolunteer.css"
import { Card } from '@mui/material'
import Slider from "react-slick";

const ContentVolunteer = () => {
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
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
        <section className='section__top-margin' >
<div className='container volunteer'>
    <h2 className='section__header'>Volunteer opportunities & Internships</h2>
    <p className='text-main section__top-margin'>We could use some extra pairs of hands to help the community of Flora Tristán. You can be part of the change we are seeking to make by participating in our volunteer and internship opportunities.</p>
    <p className='text-main section__top-margin bold'>Check out our active positions by clicking the banner below:</p>
  <div className='section__top-margin'>
    <img src="./images/volunteer/bannerVolunteer.png" alt="" />
  </div>
  <p className='text-main section__top-margin bold'>All of our positions are volunteer/internship positions and are therefore unpaid.</p>
    <div className='buttonVolunteer'>
            <button>Volunteer</button>
    </div>

    <h3>Do you have questions about volunteering in hoop?</h3>
    <h3>Read our FAQ or send us an email at info@hoop.ngo To learn more about our work, you can review our Annual Reports.</h3>
</div>          
        </section>

    )
}

export default ContentVolunteer