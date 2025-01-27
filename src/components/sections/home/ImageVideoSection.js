import React from "react";
import goldimage from "../../../assets/images/goldimage.png";
import circlevideo from "../../../assets/videos/circle2.mp4";
function ImageVideoSection() {
  return (
    <section className="image-video-section">
      <div className="image-video-section-wrapper">
        <div className="content-side">
          <h1>
            SquidGrow <br /> Utility Token
          </h1>
          <p>
            Don't miss out! Token is available on numerous renowned crypto
            platforms to make sure new holders have easy access to it.
          </p>
          <a href="https://www.sgs.trade/?srcChain=1&destChain=1&srcToken=0x0000000000000000000000000000000000000000&destToken=0xb72E76cCf005313868DB7b48070901a44629da98" className="purplebtn purplehover">
            Buy on ETH
          </a>
        </div>
        <div className="image-side">
          <video autoPlay loop muted playsInline>
            <source src={circlevideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}

export default ImageVideoSection;
