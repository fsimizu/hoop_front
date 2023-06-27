import React from "react";
import './footer.css';

export function Footer() {
    return (
        <div className="footer__container text-left">
            <div className="container footer__column-container">
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <h4 className="footer__header">Contact us</h4>
                        <p>+51 913280648</p>
                        <p>info@hoop.ngo</p>
                        <p>Follow us</p>

                        <div className="icon__background background-lightblue"><a href="https://www.facebook.com/HOOPPeru/" role="button"><i className="fab fa-facebook-f fa-xl text-blue"></i></a></div>
                        <div className="icon__background background-lightblue"><a href="https://twitter.com/hoopperu?lang=en" role="button"><i className="fab fa-twitter fa-xl"></i></a></div>
                        <div className="icon__background background-lightblue"><a href="https://www.instagram.com/hoopperu/?hl=en" role="button"><i className="fab fa-instagram fa-xl"></i></a></div>
                        <div className="icon__background background-lightblue"><a href="https://www.youtube.com/channel/UC6bUtxZ6YRKtqPNjhYqfQIA" role="button"><i className="fab fa-youtube fa-xl"></i></a></div>
                        
                    </div>
                    <div className="col-12 col-lg-4">
                        <h4 className="footer__header">Get involved</h4>
                        <p>Volunteers and Interns</p>
                        <p>Partners and Comms</p>
                        <p>Organizations and Companies</p>
                    </div>
                    <div className="col-12 col-lg-4 footer__logo">
                        <img src="/images/hero_logo.png" alt="" id="footer__image"/>
                        <p>Asociación Flora Tristán, Mz R Lote 1 Cerro Colorado Arequipa 04000 - Peru</p>
                    </div>
                </div>
            </div>
        </div>
)}