import React from "react";
import "./Home.css";
import LocationSearch from "../Search/LocationSearch/LocationSearch";

import Slider from "../SlickSlider/Slider";
import Slider2 from "../SlickSlider/Slider2";

const Home = () => {
  return (
    <div className="home">
      <LocationSearch />
      <div className="section">
        <h4>TopPicks</h4>
        <Slider />
        <h4>Pg</h4>
        <Slider2 />
        <h4>Flats</h4>
        <Slider2 />
      </div>
    </div>
  );
};

export default Home;
