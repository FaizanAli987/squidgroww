import React from "react";
import ethlogo from "../../../assets/images/eth.png";
import dexlogo from "../../../assets/images/dex.png";
import xlogo from "../../../assets/images/x.png";
import plane from "../../../assets/images/plane.png";
import abouthero from "../../../assets/images/abouthero.png";
import aboutherosm from "../../../assets/images/aboutherosm.png"
function AboutHero() {
  return (
    <section className="home-hero abouthero">
      <img src={abouthero} className="aboutheroimg fordesktop" alt="" />
      <img src={aboutherosm} className="aboutheroimg aboutherosm-img forphone" alt="" />
      <div className="hero-content">
        <h1>
          Redefining <br /> Crypto <br /> And Driving <br /> Innovation
        </h1>
        <p>
          Our Mission at SquidGrow is to create an ecosystem of captivating
          Utilties within different industries in crypto. In order to achieve
          this, we focus on key features and aspects that are driven by user
          demand
        </p>
        <div className="hero-btns">
          <a href="">
            <img src={xlogo} alt="" /> 33k+ followers
          </a>
          <a href="">
            <img src={plane} alt="" /> 11k+ followers
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
