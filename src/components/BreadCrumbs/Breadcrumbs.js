import React from "react";

import "./Breadcrumbs.scss";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ data = [] }) => {
  return data?.map((item, index) => (
    <Link
      className="bread-crumbs"
      to={index !== data?.length - 1 && item?.url}
      key={item?.id}
      style={index === data?.length - 1 ? { color: "grey" } : {}}
    >
      {item?.name} {index !== data?.length - 1 && "/"}{" "}
    </Link>
  ));
};

export default Breadcrumbs;
