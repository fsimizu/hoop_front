import React from "react";
import './navbar.css';

export function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="./">Home</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">About us</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="./about-us">History</a></li>
                                <li><a class="dropdown-item" href="./about-us">Mission, Vision & Values</a></li>
                                <li><a class="dropdown-item" href="./about-us">Tesimonies</a></li>
                                <li><a class="dropdown-item" href="./about-us">Our purpose</a></li>
                                <li><a class="dropdown-item" href="./about-us">Our impact</a></li>
                                <li><a class="dropdown-item" href="./about-us">Our team</a></li>
                                <li><a class="dropdown-item" href="./about-us">Our international team</a></li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Our work</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkRight">
                                <li><a class="dropdown-item" href="./our-work">Our programs</a></li>
                                <li><a class="dropdown-item" href="./our-work">Education</a></li>
                                <li><a class="dropdown-item" href="./our-work">Family</a></li>
                                <li><a class="dropdown-item" href="./our-work">Community &raquo; </a>
                                    <ul class="dropdown-menu dropdown-submenu dropdown-submenu-left">
                                        <li><a class="dropdown-item" href="#">Circular flora</a></li>
                                        <li><a class="dropdown-item" href="#">Ruwana</a></li>
                                        <li><a class="dropdown-item" href="#">Shop IG</a></li>
                                    </ul>
                                </li>

                                <li><a class="dropdown-item" href="./our-work">HOOP and the SDGs</a></li>
                                <li><a class="dropdown-item" href="./our-work">Annual report</a></li>
                                
                                <li>
                                    <a class="dropdown-item" href="./our-work"> Sponsors &raquo; </a>
                                    <ul class="dropdown-menu dropdown-submenu dropdown-submenu-left">
                                        <li><a class="dropdown-item" href="#">Become a sponsor</a></li>
                                    </ul>
                                </li>

                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Volunteer</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="./volunteer">Join us</a></li>
                                <li><a class="dropdown-item" href="./volunteer">Donate</a></li>
                                <li><a class="dropdown-item" href="./volunteer">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./blog">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./get-involved">Get involved</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
)}