import React from "react";

import "./Breadcrumbs.scss";

const Breadcrumbs = ({ title }) => {
  return <h4 className="top-bar-h4">Home / {title}</h4>;
};

export default Breadcrumbs;
