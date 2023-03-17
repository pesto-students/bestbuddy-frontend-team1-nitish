import React from "react";

import "./TopPicks.scss";
import Card from "../Card/Card";

const TopPicks = ({ properties }) => {
  return (
    <div className="toppicks-container">
      {properties.map((property) => (
        <Card property={property} key={property._id} />
      ))}
    </div>
  );
};

export default TopPicks;
