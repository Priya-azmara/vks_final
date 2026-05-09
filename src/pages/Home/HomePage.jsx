import React from "react";
import Hero from "../../components/common/Hero";
import About from "../../components/common/About";

import Gallery from "../../components/common/Gallery";
import Testimonial from "../../components/common/Testimonial";
import Contact from "../../components/common/Contact";
import Services from "../../components/common/Services";
import Blog from "../../components/common/Blog";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonial />
      <Blog />
      <Contact />
    </div>
  );
};

export default HomePage;
