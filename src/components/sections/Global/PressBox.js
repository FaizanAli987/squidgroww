import React from "react";

function PressBox({ title, image, headline, description, link }) {
  return (
    <div className="single-press">
      <h5>{title}</h5>
      <img src={image} alt={title} />
      <h3>{headline}</h3>
      <p>{description}</p>
      <a href={link} className="purplebtn purplehover">
        Read More
      </a>
    </div>
  );
}

export default PressBox;
