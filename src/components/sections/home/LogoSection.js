import React from "react";
import ascendex from "../../../assets/images/ascendx.png";
import bigone from "../../../assets/images/bigone.png";
import biconomy from "../../../assets/images/biconomy.png";
import coingeko from "../../../assets/images/coingeko.png";
function LogoSection() {
  return (
    <section className="logo-section">
      <div className="logo-wrapper">
        <div className="section-header">
          <h2>We Can Be Found on the Following Platforms</h2>
          <p>
            Our token is now listed on several renowned crypto platforms,
            ensuring easy access for new holders:
          </p>
        </div>
        <div className="logo-box">
          <img src={ascendex} alt="" />
          <img src={bigone} alt="" />
          <img src={biconomy} alt="" />
          <img src={coingeko} alt="" />
        </div>
      </div>
    </section>
  );
}

export default LogoSection;
