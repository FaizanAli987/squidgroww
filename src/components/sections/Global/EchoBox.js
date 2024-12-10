import React from "react";

function EchoBox({ 
  headerText, 
  subHeaderText, 
  description, 
  imageSrc, 
  imageSrcPhone, 
  buttonText, 
  buttonLink 
}) {
  return (
    <div className="single-echo-box">
      <h5>{headerText}</h5>
      <span className="line"></span>
      <h3>{subHeaderText}</h3>
      <p>{description}</p>
      <img src={imageSrc} className="fordesktop" alt="" />
      <img src={imageSrcPhone} className="forphone" alt="" />
      <a href={buttonLink} className="purplebtn purplehover">
        {buttonText}
      </a>
    </div>
  );
}

export default EchoBox;
