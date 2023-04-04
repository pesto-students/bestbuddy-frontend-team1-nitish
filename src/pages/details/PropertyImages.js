import React from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const PropertyImages = ({ images = [] }) => {
  return (
    <div className="carousel">
      <Carousel>
        {images.map((item, index) => (
          <div key={`${index}--item`}>
            <img src={item} alt={item} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PropertyImages;
