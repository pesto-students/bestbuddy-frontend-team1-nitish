import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PropertyImages = ({ images = [] }) => {
  console.log(images);
  return (
    <section className="detail-banner-img">
      <div className="banner-left">
        <img src={images[0]} alt="banner-one" />
      </div>
      <div className="banner-right">
        <img src={images[1]} alt="banner-two" />
        <img src={images[2]} alt="banner-three" />
      </div>
    </section>
  );
};

export default PropertyImages;
