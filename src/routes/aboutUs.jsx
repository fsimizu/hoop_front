import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import "./routeAboutUs.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



export function AboutUs() {

  return (
    <div>
      <Navbar />
      <div className="heroaboutUs p-5 bg-image">
        <div className="container">
          <div className="d-flex justify-content-end h-100">
            <div className="heroAboutUsText">
              <h4>Our Story</h4>
              <p><strong>Our work began</strong> in the <strong>Flora Tristán English School in 2008</strong>. Wishing to have a <strong>larger impact in the community</strong>, a group that included school staff and volunteers established HOOP as a registered Peruvian non-profit organization in 2012. Our five co-founders shared a vision for the organization that would help ensure its work in the community would be meaningful, ethical and long-lasting.HOOP has continued to grow ever since. <br />                                               As well as our programs, workshops and assessment for the development of our participants.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div class="col-6 col-md-12">
          <div className="icon-title">
            <img src="/images/vision_icon1.svg" alt="" />
            <h2>Our mision</h2>
          </div>
          <div>
            <p> <strong>To  promote the comprehensive development of individuals and their families through education.</strong>
              We understand education as the promotion of knowledge through workshops, the development of skills and academic complementarity to improve people’s abilities.</p>
          </div>
        </div>


        <div class="col-6 col-md-12">
          <div className="icon-title">
            <img src="/images/vision_icon2.svg" alt="" />
            <h2>Our vision</h2>
          </div>
          <p>
            <strong>Families transforming communities.</strong> <br />
            Our goal is to provide people with the necessary tools for them to become the change agents within their own community and generate their own development.
          </p>
        </div>
      </div>
      <Container />
=======
<div className="container our">
  <div className="row misionVision">
 <div  className=" col-12 col-md-6">
    <div className="icon-title">
    <img  className="icon1" src="/images/vision_icon1.svg" alt="" />
    <div className="title">
      <h2>Our mision</h2>  
    </div>

  </div>
<div className="pAbout">
  <p> <strong>To  promote the comprehensive development of individuals and their families through education.</strong> 
We understand education as the promotion of knowledge through workshops, the development of skills and academic complementarity to improve people’s abilities.</p>
    </div>
  </div>
  <div className=" col-12 col-md-6">
    <div  className="icon-title">
       <img src="/images/vision_icon2.svg" alt="" />
       <div className="title">
          <h2>Our vision</h2>
       </div>
    </div>
    <div className="pAbout">
       <p>
 <strong>Families transforming communities.</strong> <br />
Our goal is to provide people with the necessary tools for them to become the change agents within their own community and generate their own development.
 </p>
    </div>

    </div>
  </div>

  <div className="row values">
<h2>Our values</h2>
<div className="col-12 col-md-4">
<h3>Collaboration</h3>
</div>
<div className="col-12 col-md-4">
<h3>Trust</h3>
</div>
<div className="col-12 col-md-4">
<h3>Dynamism</h3>
</div>
  </div>
  <div className="row">
  <h2>Comunity testimony</h2> 
  <div className="testimony">
  <div className="card1">

<Card className="cardAbout">
<div className="imgAbout">
    <img src="./images/aboutUs/testimony1.jpg" alt="" />
  </div>
      <CardContent className="cardContent">
        <h3>
          Life stories
        </h3>
        <img src="./images/aboutUs/stars.png" alt="" />
        <hr />
        <div className="descriptionCard" >
           <h4>
          Testimony señora <br /> ceferina:  
        </h4>
        <p>
        I am in HOOP; because they help us with English classes and also other support with the moms, for example for me, I participate in the knitting activity and we became a team
        </p>
        </div>
       
      </CardContent>
    </Card>

  </div>
  <div className="card2">
  <Card className="cardAbout">
<div className="imgAbout">
    <img src="./images/aboutUs/testimony1.jpg" alt="" />
  </div>
      <CardContent className="cardContent">
        <h3>
          Life stories
        </h3>
        <img src="./images/aboutUs/stars.png" alt="" />
        <hr />
        <div className="descriptionCard" >
           <h4>
          Testimony señora <br /> ceferina:  
        </h4>
        <p>
        I am in HOOP; because they help us with English classes and also other support with the moms, for example for me, I participate in the knitting activity and we became a team
        </p>
        </div>
       
      </CardContent>
    </Card>
  </div>
  </div>
  </div>
 
 

</div>

      <Footer />
    </div>
  );
}

