import React from "react";
import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import "./routeAboutUs.css"



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
<div className="container our">
  <div className="row">
 <div  className="col-12 col-md-6">
    <div className="icon-title">
    <img src="/images/vision_icon1.svg" alt="" />
  <h2>Our mision</h2>
  </div>
<div>
  <p> <strong>To  promote the comprehensive development of individuals and their families through education.</strong> 
We understand education as the promotion of knowledge through workshops, the development of skills and academic complementarity to improve people’s abilities.</p>
    </div>
  </div>

  <div className="col-12 col-md-6">
    <div  className="icon-title">
       <img src="/images/vision_icon2.svg" alt="" />
  <h2>Our vision</h2>
    </div>
 <p>
 <strong>Families transforming communities.</strong> <br />
Our goal is to provide people with the necessary tools for them to become the change agents within their own community and generate their own development.
 </p>
    </div>
  </div>
  <div className="row">
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
  <div className="col-12 col-md-6">

  </div>
  <div className="col-12 col-md-6">
    
  </div>
  </div>
 

</div>
      <Footer />
    </div>
  );
}

