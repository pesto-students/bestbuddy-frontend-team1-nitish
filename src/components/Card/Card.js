import React from "react";
import "./Card.scss";
import Matchimg from "../../assets/Match.svg";
import { Link } from "react-router-dom";

const Card = ({ property }) => {
  return (
    <div className="card">
      <Link to={`/details/${property?._id}`} key={property?._id}>
        <div className="card-image">
          <img loading="lazy" src={property.image[0]} alt="cardimage" />
        </div>
        <div className="heading">
          <h5>{property.name}</h5>
          <h6>{property.city}</h6>
          <div className="matchimg">
            <img src={Matchimg} alt="Match" />
            <h6>90% Match</h6>
          </div>
        </div>
        <div className="badge">Top Match</div>
      </Link>
    </div>
  );
};

export default Card;
