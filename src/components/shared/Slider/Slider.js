import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderCard from "../../Card/SliderCard";
import "./Slider.scss";

const SlickSlider = ({ properties, title = "" }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.1,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
          infinite: false,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
          infinite: false,
        },
      },
    ],
  };

  return (
    <section className="slider-container">
      <p className="slider-title">{title}</p>
      <Slider {...settings}>
        {properties?.map((property) => (
          <div>
            <h3>
              <SliderCard property={property} />
            </h3>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SlickSlider;
