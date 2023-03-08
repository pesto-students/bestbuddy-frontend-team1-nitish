import React from "react";

import "./SliderCard.scss";
import image2 from "../../assets/images/alexandra-gorn-JIUjvqe2ZHg-unsplash.jpg";

const SliderCard = () => {
  return (
    <div className="card2">
      <div className="card-image">
        <img src={image2} alt="cardimage" />
      </div>
      <div className="card2-heading">
        <h5>Ocean Land</h5>
        <h6>Mohali,Chandigarh</h6>
      </div>
      <div className="badge">Best Match</div>
    </div>
  );
};

export default SliderCard;
