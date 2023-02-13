import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import HomePage from "../../components/HomePage/HomePage";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <Navbar1 /> */}
      <div className="content-container">
        <HomePage/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
