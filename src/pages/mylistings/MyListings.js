import React from "react";
import NavBar from "../../components/Navbar/Navbar";
import SlickSlider from "../../components/shared/Slider/Slider.js";
import Footer from "../../components/Footer/Footer.js";
import { useSelector } from "react-redux";
import "./MyListings.scss";

const MyListings = () => {
  const properties = useSelector((state) => state?.user?.userInfo?.property);

  return (
    <>
      <NavBar />
      <div className="container mylistings">
        <SlickSlider properties={properties} title="My Properties" />
      </div>
      <Footer />
    </>
  );
};

export default MyListings;
