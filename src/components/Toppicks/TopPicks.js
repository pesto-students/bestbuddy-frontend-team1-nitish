import React from "react";
import { useSelector } from "react-redux";

import "./TopPicks.scss";
import Card from "../Card/Card";
import TopPickSkeleton from "../Skeleton/TopPickSkeleton";


const TopPicks = ({ properties }) => {
  const isLoading = useSelector((state) => state.property.isLoading)
  return (
    <>
      {isLoading ? <TopPickSkeleton /> : <div className="toppicks-container">
        {properties.map((property) => (
          <Card property={property} key={property._id} />
        ))}
      </div>}

    </>
  );
};

export default TopPicks;
