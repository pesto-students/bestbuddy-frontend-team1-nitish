import React from "react";
import "./SliderCard.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SliderCardSkeleton from "../Skeleton/SliderCardSkeleton";

const SliderCard = ({ property }) => {
  const isLoading = useSelector(state => state.property.isLoading);

  return (
    <>
      {isLoading ? <SliderCardSkeleton /> : <Link to={`/details/${property?._id}`} key={property?._id}>
        <div className="card2">
          <div className="card-image">
            <img loading="lazy" src={property?.image[0]} alt="cardimage" />
          </div>
          <div className="card2-heading">
            <h5>{property?.name}</h5>
            <h6>{property?.city}</h6>
          </div>
        </div>
      </Link>}
    </>
  );
};

export default SliderCard;
