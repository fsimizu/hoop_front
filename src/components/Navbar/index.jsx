import React from "react";
import './navbar.css';

export function Navbar() {
    return (
        <div className="navbar__container bg-body-tertiary">
                <nav className="container navbar navbar-expand-lg">
                    <div className="container-fluid align-items-end">
                        <a className="navbar-brand" href="./"><img src="/images/navbar_logo.png" alt=""/></a>
                        {/* <div className="container-fluid align-items-end justify-content-between"> */}
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">About us</a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="./about-us">History</a></li>
                                            <li><a className="dropdown-item" href="./about-us">Mission, Vision & Values</a></li>
                                            <li><a className="dropdown-item" href="./about-us">Tesimonies</a></li>
                                            <li><a className="dropdown-item" href="./about-us">Our purpose</a></li>
                                            <li><a className="dropdown-item" href="./about-us">Our impact</a></li>
                                            <li><a className="dropdown-item" href="./about-us">Our team</a></li>
                                            <li><a className="dropdown-item" href="./about-us">Our international team</a></li>
                                        </ul>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Our work</a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkRight">
                                            <li><a className="dropdown-item" href="./our-work">Our programs</a></li>
                                            <li><a className="dropdown-item" href="./our-work">Education</a></li>
                                            <li><a className="dropdown-item" href="./our-work">Family</a></li>
                                            <li><a className="dropdown-item" href="./our-work">Community &raquo; </a>
                                                <ul className="dropdown-menu dropdown-submenu dropdown-submenu-left">
                                                    <li><a className="dropdown-item" href="#">Circular flora</a></li>
                                                    <li><a className="dropdown-item" href="#">Ruwana</a></li>
                                                    <li><a className="dropdown-item" href="#">Shop IG</a></li>
                                                </ul>
                                            </li>

                                            <li><a className="dropdown-item" href="./our-work">HOOP and the SDGs</a></li>
                                            <li><a className="dropdown-item" href="./our-work">Annual report</a></li>
                                            
                                            <li>
                                                <a className="dropdown-item" href="./our-work"> Sponsors &raquo; </a>
                                                <ul className="dropdown-menu dropdown-submenu dropdown-submenu-left">
                                                    <li><a className="dropdown-item" href="#">Become a sponsor</a></li>
                                                </ul>
                                            </li>

                                        </ul>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Volunteer</a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="./volunteer">Join us</a></li>
                                            <li><a className="dropdown-item" href="./volunteer">Donate</a></li>
                                            <li><a className="dropdown-item" href="./volunteer">Something else here</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="./blog">Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="./get-involved">Get involved</a>
                                    </li>
                                </ul>
                            </div>
                    </div>
                </nav>
        </div>
)}