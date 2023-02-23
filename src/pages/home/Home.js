import React from "react";
import {Link} from "react-router-dom";
import TopPicks from '../../components/Toppicks/TopPicks';
import Slider from '../../components/shared/Slider/Slider';
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Preference from "../preference/Preference";
import Amenties from "../../components/Amenties/Amenties";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Link to={'/details/1'}>Details</Link>
      <div className="container">
        <TopPicks />
        <Slider title="PG" />
        <Slider title='Flats' />
        <Slider title='Apartment' />
        <Slider title='Residency' />
        <Preference />
        <Amenties />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
