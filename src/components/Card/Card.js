import React from "react";

import "./Card.scss";
// import image1 from "../../assets/images/kara-eads-L7EwHkq1B2s-unsplash.jpg";

const Card = ({ property }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={property.image[0]} alt="cardimage" />
      </div>
      <div className="heading">
        <h5>{property.name}</h5>
        <h6>{property.city}</h6>
      </div>
      <div className="badge">Best Match</div>
    </div>
  );
};

export default Card;
