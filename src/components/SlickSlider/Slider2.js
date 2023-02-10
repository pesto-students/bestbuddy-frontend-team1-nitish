import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card2 from "../Card/Card2";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <h3>
              <Card2 />
            </h3>
          </div>
          <div>
            <h3>
              <Card2 />
            </h3>
          </div>
          <div>
            <h3>
              <Card2 />
            </h3>
          </div>
          <div>
            <h3>
              <Card2 />
            </h3>
          </div>
          <div>
            <h3>
              <Card2 />
            </h3>
          </div>
          <div>
            <h3>
              <Card2 />
            </h3>
          </div>
          <div>
            <h3>
              <Card2 />
            </h3>
          </div>
        </Slider>
      </div>
    );
  }
}
