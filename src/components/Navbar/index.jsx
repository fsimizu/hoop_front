import React from "react";
import './navbar.css';


export function Navbar() {

    const handleCloseClick = () => {
        document.getElementById("myNav").style.height = "0%";
    };

    const handleOpenClick = () => {
        document.getElementById("myNav").style.height = "100%";
    };


    return (
        <div className="navbar__container bg-body-tertiary">

            <div id="myNav" className="overlay" >
                <a href="javascript:void(0)" className="closebtn" onClick={handleCloseClick}>&times;</a>
                <div className="overlay-content">
                    <a href="/">Home</a>
                    <a href="/about-us">About</a>
                    <a href="/our-work">Our work</a>
                    <a href="/volunteer">Volunteer</a>
                    <a href="/faq">FAQs</a>
                    <a href="/get-involved" className='text-yellow'><strong>Get involved</strong></a>

                    <p className="section__top-margin"><strong>Follow us</strong></p>
                    <div className="overlay__social-media">
                        <div className="icon__background background-lightblue"><a href="https://www.facebook.com/HOOPPeru/" role="button"><i className="fab fa-facebook-f fa-lg text-blue"></i></a></div>
                        <div className="icon__background background-lightblue"><a href="https://twitter.com/hoopperu?lang=en" role="button"><i className="fab fa-twitter fa-lg"></i></a></div>
                        <div className="icon__background background-lightblue"><a href="https://www.instagram.com/hoopperu/?hl=en" role="button"><i className="fab fa-instagram fa-lg"></i></a></div>
                        <div className="icon__background background-lightblue"><a href="https://www.youtube.com/channel/UC6bUtxZ6YRKtqPNjhYqfQIA" role="button"><i className="fab fa-youtube fa-lg"></i></a></div>
                    </div>
                    <a href="/#getInTouch" onClick={handleCloseClick}>Contact us</a>
  
                </div>

            </div>

            <nav className="container navbar navbar-expand-lg">
                <div className="container-fluid align-items-end">
                    <a className="navbar-brand" href="./"><img src="/images/navbar_logo.png" alt="" /></a>
                    <button onClick={handleOpenClick} className="navbar-toggler" type="button" data-bs-toggle="collapse" /*data-bs-target="#navbarNavDropdown"*/ aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" ></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">About us</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="./about-us"><img className="navbar__icon" src="images/navbar_icon-history.png" alt="Our History" /><p>Our History</p></a></li>
                                    <li><a className="dropdown-item" href="./about-us"><img className="navbar__icon" src="images/navbar_icon-testimonies.png" alt="Tesimonies" /><p>Tesimonies</p></a></li>
                                    <li><a className="dropdown-item" href="./about-us"><img className="navbar__icon" src="images/navbar_icon-purpose.png" alt="Purpose" /><p>Purpose</p></a></li>
                                    <li><a className="dropdown-item" href="./about-us"><img className="navbar__icon" src="images/navbar_icon-impact.png" alt="Impact" /><p>Impact</p></a></li>
                                    <li><a className="dropdown-item" href="./about-us"><img className="navbar__icon" src="images/navbar_icon-team.png" alt="Team" /><p>Team</p></a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">Our work</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkRight">
                                    <li><a className="dropdown-item" href="./education"><img className="navbar__icon" src="images/navbar_icon-education.png" alt="Education" /><p>Education</p></a></li>
                                    <li><a className="dropdown-item" href="./family"><img className="navbar__icon" src="images/navbar_icon-family.png" alt="Family" /><p>Family</p></a></li>
                                    <li><a className="dropdown-item" href="./community"><img className="navbar__icon" src="images/navbar_icon-community.png" alt="Community" /><p>Community</p></a></li>
                                    <li><a className="dropdown-item" href="./community"><img className="navbar__icon" src="images/navbar_icon-impact.png" alt="Impact" /><p>Impact</p></a></li>
                                    <li><a className="dropdown-item" href="./community"><img className="navbar__icon" src="images/navbar_icon-reports.png" alt="reports" /><p>Annual reports</p></a></li>

                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">Volunteer</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkRight">
                                    <li><a className="dropdown-item" href="./volunteer"><img className="navbar__icon" src="images/navbar_icon-opportunities.png" alt="reports" /><p>Opportunities</p></a></li>
                                    <li><a className="dropdown-item" href="./volunteer"><img className="navbar__icon" src="images/navbar_icon-volunteers.png" alt="reports" /><p>Our volunteers</p></a></li>
                                    <li><a className="dropdown-item" href="./volunteer"><img className="navbar__icon" src="images/navbar_icon-partners.png" alt="reports" /><p>Our partners</p></a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="./faq">FAQs</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link btn btn-primary text-white" href="./get-involved"><strong>Get involved</strong></a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>


    )
}