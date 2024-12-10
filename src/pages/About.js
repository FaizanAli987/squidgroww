import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/sections/Global/Footer";
import AboutHero from "../components/sections/about/AboutHero";
import BubbleSection from "../components/sections/about/BubbleSection";
import AmbassadorSection from "../components/sections/about/AmbassadorSection";
import SlideSection from "../components/sections/about/SlideSection";

function About() {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <main className="about-main">
        <AboutHero />
        <SlideSection />
        <BubbleSection />
        <AmbassadorSection />
      </main>
      <Footer />
    </>
  );
}

export default About;
