import React from "react";
import "./Home.css";
import LocationSearch from "../Search/LocationSearch/LocationSearch";
import TopPicks from "./TopPicks";

const Home = () => {
  return (
    <div className="home">
      <LocationSearch />
      <div className="section">
        <TopPicks />
      </div>
    </div>
  );
};

export default Home;
