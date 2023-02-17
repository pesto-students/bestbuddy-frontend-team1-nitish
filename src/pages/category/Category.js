import React from "react";

import "./Category.scss";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/shared/Slider/Slider";
import Breadcrumbs from "../../components/BreadCrumbs/Breadcrumbs";

const Category = () => {
  return (
    <div>
      <Navbar />
      <div className="content-container">
        <div className="top-bar">
          <Breadcrumbs />
          <input
            className="top-bar-search"
            type="search"
            name="search"
            id="search"
            placeholder="Search Rooms"
          />
        </div>
        <Slider title="Two Sharing" />
        <Slider title="Two Sharing" />
        <Slider title="Two Sharing" />
      </div>
      <Footer />
    </div>
  );
};

export default Category;
