import React, { useState, useEffect, useRef } from "react";
import SingleSlide from "../Global/SingleSlide";
import xicon from "../../../assets/images/xicon.png";
import maskman from "../../../assets/images/maskman.png";
import tina from "../../../assets/images/tina.png";
function SlideSection() {
  const [distance, setDistance] = useState(0);
  const [width, setWidth] = useState("100%");

  const updateDimensions = () => {
    const heroContent = document.querySelector(".hero-content");
    if (heroContent) {
      const rect = heroContent.getBoundingClientRect();
      const distanceFromLeft = rect.left;
      setDistance(distanceFromLeft);
      setWidth(`calc(100% - ${distanceFromLeft}px)`);
    }
  };

  useEffect(() => {
    // Initial calculation
    updateDimensions();

    // Update on window resize
    window.addEventListener("resize", updateDimensions);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);
  return (
    <section className="slide-section">
      <div
        className="slide-wrapper"
        style={{
          width: width,
        }}
      >
        <div className="slide-left">
          <h1>Our team is a diverse powerhouse of blockchain veterans</h1>
        </div>
        <div className="slide-right">
          <div className="slidebox">
            <SingleSlide
              image={maskman}
              name="SHIBTOSHI"
              title="Chief Executive Officer Co-Founder"
              description="Shibtoshi is a notable figure in the cryptocurrency world. Bitcoin Whale since 2011 and one of the top Shiba-Inu Whales."
              icon={xicon}
            />
       <SingleSlide
              image={tina}
              name="tinaa.eth"
              title="Chief Marketing Officer"
              description="Strategic Chief Marketing Officer with an added bonus of having a background in finance, driving key partnerships and networks to propel project success."
              icon={xicon}
            />
            <SingleSlide
              image={maskman}
              name="SHIBTOSHI"
              title="Chief Executive Officer Co-Founder"
              description="Shibtoshi is a notable figure in the cryptocurrency world. Bitcoin Whale since 2011 and one of the top Shiba-Inu Whales."
              icon={xicon}
            />
            <SingleSlide
              image={tina}
              name="tinaa.eth"
              title="Chief Marketing Officer"
              description="Strategic Chief Marketing Officer with an added bonus of having a background in finance, driving key partnerships and networks to propel project success."
              icon={xicon}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SlideSection;
