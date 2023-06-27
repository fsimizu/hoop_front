import React from "react";
import './socialMedia.css';

export function SocialMedia() {
    return (
            <div className="social-media__container">
                <div className="icon__background"><a href="https://www.facebook.com/HOOPPeru/" role="button"><i className="fab fa-facebook-f fa-lg"></i></a></div>
                <div className="icon__background"><a href="https://twitter.com/hoopperu?lang=en" role="button"><i className="fab fa-twitter fa-lg"></i></a></div>
                <div className="icon__background"><a href="https://www.instagram.com/hoopperu/?hl=en" role="button"><i className="fab fa-instagram fa-lg"></i></a></div>
                <div className="icon__background"><a href="https://www.youtube.com/channel/UC6bUtxZ6YRKtqPNjhYqfQIA" role="button"><i className="fab fa-youtube fa-lg"></i></a></div>
            </div>
)}