import React from "react";
import sign from "../../../assets/images/sign.png";
import man from "../../../assets/images/man.png";
import mansm from "../../../assets/images/mansm.png";
function ImageTextSection() {
  return (
    <section className="image-with-text-section">
      <div className="image-with-text-wrapper">
        <div className="image-with-text-box">
          <div className="image-with-text-content">
            <h3>
              Shibtoshi: <br /> an open letter from the owner.
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea. Duis aute irurefugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <img src={sign} alt="" />
          </div>
          <div className="image-with-text-media">
            <img src={man} className="fordesktop" alt="" />
            <img src={mansm} className="forphone" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageTextSection;
