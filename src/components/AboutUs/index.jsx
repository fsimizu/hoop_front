import React from "react";
import './abousUs.css';

export function AboutUs() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6">
                    <h2 className="section__header">About us</h2>
                    <p>Hoop is a NGO dedicated to work in communities communities in the northern cone of Arequipa developing projects focused on 3 main areas: 
                        <strong> Education, Family (psychology), Community (social work)</strong></p>
                    <p>HOOP was founded in 2012 by volunteers and staff of the Flora Tristan English School in Cerro Colorado. Families there had no access to basic services and it was sought to provide educational services to achieve a positive impact on the community.</p>
                    <p>Today former volunteers represento us in countries like Austria, France, Germany, Taiwan, England and the United States, suportin our organization and ensuring the sustainability of our work through grants and donations.</p>
                </div>
                <div class="col-12 col-md-6">
                    <img id="aboutUs__image" src="/placeholder.png" alt="image about us" />
                </div>
            </div>
        </div>
)}