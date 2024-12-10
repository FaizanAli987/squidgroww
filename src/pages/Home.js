import React from "react";
import Navbar from "../components/Navbar";
import HomeHero from "../components/sections/home/HomeHero";
import UtilitySectionHome from "../components/sections/home/UtilitySectionHome";
import EcosystemSection from "../components/sections/home/EcosystemSection";
import ImageVideoSection from "../components/sections/home/ImageVideoSection";
import CommunitySection from "../components/sections/home/CommunitySection";
import CounterSection from "../components/sections/home/CounterSection";
import CapibilitySection from "../components/sections/home/CapibilitySection";
import ImageTextSection from "../components/sections/home/ImageTextSection";
import LogoSection from "../components/sections/home/LogoSection";
import Footer from "../components/sections/Global/Footer";
function Home() {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <main>
        <HomeHero />
        <UtilitySectionHome />
        <EcosystemSection />
        <ImageVideoSection />
        <CommunitySection />
        <CounterSection />
        <CapibilitySection />
        <ImageTextSection />
        <LogoSection />
      </main>
      <Footer />
    </>
  );
}

export default Home;
