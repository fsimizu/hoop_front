import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import RouteVolunteer from "../components/RouteVolunteer/RouteVolunteer";

export function Volunteer() {

  return (
    <div>
      <Navbar />
      <RouteVolunteer />
      <Footer />
    </div>
  );
}

