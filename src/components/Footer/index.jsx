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
                        <p>Follow us on Instagram</p>
                    </div>
                    <div className="col-12 col-lg-4">
                        <h4 className="footer__header">Get involved</h4>
                        <p>Volunteers and Interns</p>
                        <p>Partners and Comms</p>
                        <p>Organizations and Companies</p>
                    </div>
                    <div className="col-12 col-lg-4">
                        <img src="/images/hero_logo.png" alt="" id="footer__image"/>
                        <p>Asociación Flora Tristán,<br/>Mz R Lote 1 Cerro Colorado<br/>Arequipa 04000 - Peru</p>
                    </div>
                </div>
            </div>
        </div>
)}