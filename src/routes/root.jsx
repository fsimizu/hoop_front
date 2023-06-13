import React from "react";
import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";


export function Root() {

  return (
    <div>
      <Navbar />
      <h1>HOOP ONG</h1>
      <Container />
      <Footer />
    </div>
  );
}
