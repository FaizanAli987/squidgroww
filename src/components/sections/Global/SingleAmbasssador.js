import React from "react";

function SingleAmbasssador({ description, image, name }) {
  return (
    <div className="single-ambassador">
      <p>{description}</p>
      <div className="ambassador-footer">
        <img src={image} alt={name} />
        <h3>{name}</h3>
      </div>
    </div>
  );
}

export default SingleAmbasssador;
