import React from "react";
import "./Home.css";
import LocationSearch from "../Search/LocationSearch/LocationSearch";
import TopPicks from "./TopPicks";
import Pg from "./Pg";
import Flats from "./Flats";

const Home = () => {
  return (
    <div className="home">
      <LocationSearch />
      <div className="section">
        <TopPicks />
        <Pg />
        <Flats />
      </div>
    </div>
  );
};

export default Home;
