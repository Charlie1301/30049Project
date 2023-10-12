import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import Navbar from "../Components/Navbar/Navbar";
import HeroSection from "../Components/HeroSection/HeroSection";
import InfoSection from "../Components/InfoSection/InfoSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree
} from "../Components/InfoSection/data";
import Services from "../Components/Services/Services";
import Footer from "../Components/Footer/Footer";

function About() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <Footer />
    </>
  );
}

export default About;
