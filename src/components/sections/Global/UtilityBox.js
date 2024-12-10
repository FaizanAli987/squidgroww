import React, { useState, useEffect } from "react";

function UtilityBox({ 
  desktopBackgroundImage, 
  mobileBackgroundImage, 
  hotText, 
  title, 
  description, 
  buttonText, 
  buttonLink, 
  classn, 
  phoneimg 
}) {
  const [backgroundImage, setBackgroundImage] = useState(desktopBackgroundImage);

  useEffect(() => {
    const updateBackgroundImage = () => {
      if (window.innerWidth <= 767) {
        setBackgroundImage(mobileBackgroundImage);
      } else {
        setBackgroundImage(desktopBackgroundImage);
      }
    };

    // Set background on load
    updateBackgroundImage();

    // Update background on resize
    window.addEventListener("resize", updateBackgroundImage);
    return () => {
      window.removeEventListener("resize", updateBackgroundImage);
    };
  }, [desktopBackgroundImage, mobileBackgroundImage]);

  return (
    <div
      className={`utility-single-box ${classn}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <img src={phoneimg} className="utilityphoneimg" alt="" />
      <div className="utility-content-box">
        <h6>{hotText}</h6>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={buttonLink} className="purplebtn purplehover">
          {buttonText}
        </a>
      </div>
    </div>
  );
}

export default UtilityBox;
