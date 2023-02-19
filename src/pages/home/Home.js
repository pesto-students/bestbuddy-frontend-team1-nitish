import React from "react";

import TopPicks from '../../components/Toppicks/TopPicks';
import Slider from '../../components/shared/Slider/Slider';
// import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";


const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <TopPicks />
        <Slider title="PG" />
        <Slider title='Flats' />
        <Slider title='Apartment' />
        <Slider title='Residency' />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
