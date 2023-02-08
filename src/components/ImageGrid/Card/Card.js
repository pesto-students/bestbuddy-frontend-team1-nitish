import image from "../../../assets/images/kam-idris-_HqHX3LBN18-unsplash.jpg";
import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="cardimage"/>
      </div>
      <div className="heading">
        <h5>Ocean Land</h5>
        <h6>Mohali,Chandigarh</h6>
      </div>
      <div className="badge">
        Best Match
      </div>
    </div>
  );
};

export default Card;
