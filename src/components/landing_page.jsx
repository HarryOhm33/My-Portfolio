import Hero from "./Hero/Hero";
import About from "./About/About";
import Services from "./Services/Services";
import MyWork from "./MyWork/MyWork";
import Contact from "./Contact/Contact";

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Landing_page = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace("#", "");

      const element = document.getElementById(elementId);
      if (element) {
        setTimeout(function () {
          element.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
    </>
  );
};

export default Landing_page;
