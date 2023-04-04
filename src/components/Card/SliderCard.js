import React from "react";
import "./SliderCard.scss";

const SliderCard = ({ property }) => {
  return (
    <div className="card2">
      <div className="card-image">
        <img src={property?.image[0]} alt="cardimage" />
      </div>
      <div className="card2-heading">
        <h5>{property?.name}</h5>
        <h6>{property?.city}</h6>
      </div>
    </div>
  );
};

export default SliderCard;
