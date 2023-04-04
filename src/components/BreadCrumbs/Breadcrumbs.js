import React from "react";

import "./Breadcrumbs.scss";

const Breadcrumbs = ({ title }) => {
  return <ul className="bread-crumbs container">
    <li>Home</li>
    <li>/</li>
    <li>{title}</li>
  </ul>;
};

export default Breadcrumbs;
