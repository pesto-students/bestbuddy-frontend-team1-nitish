import React from "react";

const MoreDetails = ({ data = "" }) => {
  return (
    <>
      {data && (
        <div className="property-details-more-container">
          <p className="header">Details</p>
          <p className="para">{data}</p>
        </div>
      )}
    </>
  );
};

export default MoreDetails;
