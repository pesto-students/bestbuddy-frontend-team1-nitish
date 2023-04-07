import React from "react";
import { Link } from "react-router-dom";
import "./ShowMore.scss";

const ShowMore = ({ title }) => {
  return (
    <div>
      <Link to={`/category/${title}`}>
        <p className="show-more">show more {title}s</p>
      </Link>
    </div>
  );
};

export default ShowMore;
