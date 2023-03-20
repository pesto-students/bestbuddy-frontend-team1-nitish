import React from "react";
import "./Location.scss";
import icon from "../../../assets/icon.svg";

const LocationSearch = () => {
  return (
    <div className="locationSearch">
      <img src={icon} alt="locationSearch" className="loc-icon" />
      <input
        type="search"
        name="locationSearch"
        id="locationSearch"
        placeholder="Search places..."
        className="input"
      />
    </div>
  );
};

export default LocationSearch;
