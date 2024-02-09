import React from "react";
import Header from "./Header";
import About from "./About";
import Services from "./Services";
import Testimonial from "./Testimonial";
import ChooseUs from "./ChooseUs";
import Faq from "./Faq";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Services />
      <Testimonial />
      <ChooseUs />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
