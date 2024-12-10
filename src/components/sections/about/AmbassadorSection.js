import React from "react";
import SingleAmbasssador from "../Global/SingleAmbasssador";
import wendy from "../../../assets/images/wendy.png";
import proth from "../../../assets/images/prothedoge.png";
import daniel from "../../../assets/images/daniel.png";
function AmbassadorSection() {
  return (
    <section className="ambassador-section">
      <h1>Ambassadors</h1>
      <div className="ambassador-row">
        <SingleAmbasssador
          description="Los Angeles based Entrepreneur and Crypto Analyst. Published in Wall
        Street Journal, Washington Post, NBC News, Forbes, Fox Business, CNBC,
        Time, Bloomberg, and more. Host of Coindesk’s 'The Hash' and Host and
        Founder of The O Show - Everything Crypto & NFT’s every day."
          image={wendy}
          name="WENDY O"
        />
        <SingleAmbasssador
          description="Pro The Doge AKA The Dogecoin Millionaire discovered crypto in 2021. He believed in the technology so much he invested his entire life savings into Dogecoin and in about 2 short months (69 days to be exact) he became a Dogecoin Millionaire."
          image={proth}
          name="PROTHEDOGE"
        />
        <SingleAmbasssador
          description="Daniel D-Rod Rodriguez is a professional mixed martial artist (MMA) from Los Angeles, California. His fearlessness and striking skills have earned him a reputation as a rising star in the UFC. Beyond sports, D-Rod's journey from humble beginnings to..."
          image={daniel}
          name="DANIEL
        RODRIGUEZ"
        />
      </div>
    </section>
  );
}

export default AmbassadorSection;
