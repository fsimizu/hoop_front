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
        <section >
<div className='container volunteer'>
    <h2>Volunteer</h2>
    <ul>
        <li>
        <strong>English Teacher:</strong> As a Lead English teacher, you will be in charge of teaching a class of 15 to 20 students, aged between 3yo & 16yo depending on the class and your preference, from Tuesday to Friday, from 3:30pm to 5:30pm. You will have to plan your lesson using all the resources available at HOOP and the the Education coordinator will be supporting you.
        </li>
        <li>
        <strong>Program Assistant:</strong> Support the Family program coordinator in the planning and execution of workshops on the following topics: Family planning, sex education, stigmas in relation to mental health, emotional awareness, and prevention of risk behaviors, among others.
        </li>
        <li>
        <strong>Fundraising Assistant:</strong> Support the Director in the project budget analysis and identification of funding needs, as well as establishing local and international fundraising strategies.
        </li>
        <li>
        <strong>Academic Coordinator:</strong> Support the Education coordinator in the execution of English, Coding and CEBA projects. Participating in the design of curriculum, test and overall supervision of the Education department.
        </li>
        <li>
        <strong>Kindergarden Assistant:</strong> Support in the care of children from 3 to 10 years old. Propose playful activities (games, singing, handicrafts, among others) and develop them during classes.
        </li>
        <li>
       <strong>Web/Graphic Designer:</strong>  Support the Communication department in the update & design of our website, suggesting & implementing new ideas for it to be more efficient.
        </li>
        <li>
       <strong>Public Relations Assistant:</strong> Support in the planning and execution of events (from coordination to logistics).Support in the contact, coordination and diffusion of the organization’s projects with press media.
        </li>

    </ul>
    <div className='buttonVolunteer'>
            <button>Volunteer</button>
    </div>

    <h3>Do you have questions about volunteering in hoop?</h3>
    <h3>Read our FAQ or send us an email at info@hoop.ngo
To learn more about our work, you can review our Annual Reports.</h3>
</div>          
        </section>

    )
}

export default ContentVolunteer