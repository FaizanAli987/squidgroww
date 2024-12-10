import React from "react";

function SingleSlide({ image, name, title, description, icon }) {
  return (
    <div className="single-slide">
      <img src={image} className="slideimg" alt={name} />
      <h2>{name}</h2>
      <h6>{title}</h6>
      <p>{description}</p>
      <img src={icon} className="slideicon" alt="Icon" />
    </div>
  );
}

export default SingleSlide;
