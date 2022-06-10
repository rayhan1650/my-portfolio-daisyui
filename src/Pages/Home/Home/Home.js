import React from "react";
import Footer from "../../Shared/Footer/Footer";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
