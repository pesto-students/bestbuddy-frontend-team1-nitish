import React from "react";
import "./ImageGrid.css";
import Card from "../ImageGrid/Card/Card";

const ImageGrid = () => {
  return (
    <div className="image-grid">
      <div className="card-group">
        <Card />
        <Card />
      </div>
      <div className="card-group">
        <Card />
        <Card />
      </div>
      <div className="card-group">
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default ImageGrid;
