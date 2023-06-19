import React from "react";
import './hero.css';

export function Hero() {
    return (
        <div class="p-5 text-center bg-image" id="hero__container">
            <div class="mask">
                <div class="d-flex justify-content-center align-items-center h-100">
                    <div class="text-white">
                        <h1 class="mb-3">We are HOOP</h1>
                        <h4 class="mb-3">An NGO working with communities in the northern cone of Arequipa, Perú.</h4>
                        <a class="btn btn-outline-light btn-lg" href="#!" role="button">Call to action</a>
                    </div>
                </div>
            </div>
        </div>
)}