import React from "react";
import "./Category.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

import Slider2 from "../../components/SlickSlider/Slider2";

const Category = () => {
  return (
    <div>
      <Navbar />
      <div className="content-container">
        <div className="top-bar">
          <h4 className="top-bar-h4">Home / PG</h4>
          <input
            className="top-bar-search"
            type="search"
            name="search"
            id="search"
            placeholder="Search Rooms"
          />
        </div>
        <h4>Related Suggestions</h4>
        <Slider2 />
        <h4>Pg</h4>
        <Slider2 />
        <h4>Flats</h4>
        <Slider2 />
      </div>
      <Footer />
    </div>
  );
};

export default Category;
