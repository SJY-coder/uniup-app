import React from "react";


import Home from "./Home";
import Concept from "./Concept";
import About from "./About";
import Sikumi from "./Sikumi";
import Navbar from "./Navbar";
import Contact from "./Contact";


function AppPage1() {
  return (
    <div>
      <Navbar />
      <Home />
      <Concept />
      <About />
      <Sikumi />
      <Contact />
    </div>
  );
}

export default AppPage1;
