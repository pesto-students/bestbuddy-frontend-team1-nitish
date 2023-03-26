import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderCard from "../../Card/SliderCard";
import "./Slider.scss";
import { Link } from "react-router-dom";

const SlickSlider = ({ properties, title }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <section className="slider-container">
      <Link to="/category">
        <p className="slider-title">{title}</p>
      </Link>
      <Slider {...settings}>
        {properties?.map((property) => (
          <Link to={`/details/${property?._id}`} key={property?._id}>
            <div>
              <h3>
                <SliderCard property={property} />
              </h3>
            </div>
          </Link>
        ))}
      </Slider>
      <Link to={`/category/${title}`}>
        <p className="show-more">show more</p>
      </Link>
    </section>
  );
};

export default SlickSlider;
