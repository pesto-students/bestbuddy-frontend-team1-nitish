import React from "react";
import { Link } from "react-router-dom";
import TopPicks from "../../components/Toppicks/TopPicks";
import Slider from "../../components/shared/Slider/Slider";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import LocationSearch from './../../components/Search/LocationSearch/LocationSearch';

const Home = () => {
  return (
    <div>
      <Navbar />
      <LocationSearch />
      <Link to={"/details/1"}>Details</Link>
      <div className="container">
        <TopPicks />
        <Slider title="PG" />
        <Slider title="Flats" />
        <Slider title="Apartment" />
        <Slider title="Residency" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
