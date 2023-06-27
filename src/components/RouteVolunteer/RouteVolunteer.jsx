import React from 'react'
import "./routeVolunteer.css"
import { Card } from '@mui/material'

const RouteVolunteer = () => {
    return (
        <section >
            {/* HERO VOLUNTEER */}
            <div className="heroVolunteer p-5 bg-image">
                <div className="container">
                    <div className="d-flex justify-content-center h-100">
                        <div className="heroVolunteerText">
                            <h1>Volunteer</h1>
                        </div>
                    </div>
                </div>
            </div>
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

<div className='hoopVolunteers'>
<Slider {...settings} >

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>


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
</div>
            
        </section>
    )
}

export default RouteVolunteer