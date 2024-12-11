import React from "react";
import capvideo from "../../../assets/videos/capibility.mp4";
function CapibilitySection() {
  return (
    <section className="capibility-section">
      <div className="capibility-content">
        <h1>
          Multichain <br />
          Capabilities
        </h1>
        <p>
          SquidGrow is a revolutionary new type of token: a Utility-Meme
          multichain project - the best of both worlds and allows smooth
          transactions across different blockchains. Its Multi-Chain
          Capabilities create a harmonious crypto ecosystem, thanks to the power
          of interoperability.
        </p>
        <a href="https://www.sgs.trade/?srcChain=1&destChain=1&srcToken=0x0000000000000000000000000000000000000000&destToken=0xb72E76cCf005313868DB7b48070901a44629da98" className="purplebtn purplehover">
          Launch Swap
        </a>
      </div>
      <video autoPlay loop muted playsInline>
        <source src={capvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}

export default CapibilitySection;
