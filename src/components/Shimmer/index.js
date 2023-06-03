import React from "react";
import "./index.scss";

export const Shimmer = ({ style = {} }) => {
  return <div className={"box animate"} style={{...style}} />;
};
