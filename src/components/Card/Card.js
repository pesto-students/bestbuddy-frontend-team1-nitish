import React from "react";

import "./Card.scss";
import image1 from "../../assets/images/kara-eads-L7EwHkq1B2s-unsplash.jpg";

const Card = () => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image1} alt="cardimage" />
      </div>
      <div className="heading">
        <h5>Ocean Land</h5>
        <h6>Mohali,Chandigarh</h6>
      </div>
      <div className="badge">Best Match</div>
    </div>
  );
};

export default Card;
