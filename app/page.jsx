import React from "react";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Cta from "../components/sections/Cta";
import Hero from "../components/sections/Hero";
import Portfolio from "../components/sections/Portfolio";
import Services from "../components/sections/Services";

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Cta />
      <Portfolio />
      <Contact />
    </>
  );
};

export default page;
