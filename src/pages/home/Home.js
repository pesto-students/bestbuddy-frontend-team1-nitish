import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import TopPicks from "../../components/Toppicks/TopPicks";
import Slider from "../../components/shared/Slider/Slider";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import LocationSearch from "./../../components/Search/LocationSearch/LocationSearch";
import { fetchAllProperties } from "../../store/slice/property/propertySlice";
import { userInfo } from "../../store/slice/users/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  const properties = useSelector((state) => state.property.allProperties);

  useEffect(() => {
    dispatch(fetchAllProperties());
    dispatch(userInfo("demo@gmail.com"));
  }, []);

  const flats = properties.filter((property) => property.category === "Flat");
  const pgs = properties.filter((property) => property.category === "PG");
  const apartments = properties.filter(
    (property) => property.category === "Apartment"
  );
  const toppicks = properties.filter((property) => property.city === "Delhi");

  return (
    <div>
      <Navbar />
      {/* <LocationSearch /> */}
      <div className="container">
        <TopPicks properties={toppicks} />
        <Slider title="All Properties" properties={properties} />
        <Slider title="Flat" properties={flats} />
        <Slider title="PG" properties={pgs} />
        <Slider title="Apartment" properties={apartments} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
