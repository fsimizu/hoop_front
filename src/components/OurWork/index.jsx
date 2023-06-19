import React from "react";
import './ourWork.css';

export function OurWork() {
    return (
        <div class="container">
            <h2>OUR WORK</h2>
            <div class="ourWork__cards justify-content-center">
                <div class="card">
                    <img class="card-img-top" src="/placeholder.png" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">EDUCATION</h5>
                        <p class="card-text">We provide free English and coding classes for children between 6 and 17 years old, primary and secondary education for adults.</p>
                        <a href="#" class="ourWork__readMore">Read more</a>                    
                    </div>
                </div>

                <div class="card">
                    <img class="card-img-top" src="/placeholder.png" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">FAMILY</h5>
                        <p class="card-text">We promote and raise awareness about mental and physical health through psychoeducational workshops and activities to achieve self-knowledge, emotional management and well-being </p>
                        <a href="#" class="ourWork__readMore">Read more</a> 
                    </div>
                </div>

                <div class="card">
                    <img class="card-img-top" src="/placeholder.png" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">COMMUNITY</h5>
                        <p class="card-text">We give consultation and training in composting and knitting that create opportunities for the communities that manage these projects.</p>
                        <a href="#" class="ourWork__readMore">Read more</a> 
                    </div>
                </div>
            </div>
        </div>
)}