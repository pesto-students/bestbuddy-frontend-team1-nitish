import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import TopPicks from "../../components/Toppicks/TopPicks";
import Slider from "../../components/shared/Slider/Slider";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import LocationSearch from "./../../components/Search/LocationSearch/LocationSearch";
import { fetchAllProperties } from "../../store/slice/property/propertySlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  const properties = useSelector((state) => state.property.allProperties);

  useEffect(() => {
    dispatch(fetchAllProperties());
  }, []);

  // useEffect(() => {
  //   console.log(properties);
  // }, [properties]);

  const flats = properties.filter((property) => property.category === "Flat");
  const pgs = properties.filter((property) => property.category === "PG");
  const apartments = properties.filter(
    (property) => property.category === "Apartment"
  );
  console.log(flats, pgs, apartments);

  return (
    <div>
      <Navbar />
      <LocationSearch />
      {/* <Link to={"/details/1"}>Details</Link> */}
      <div className="container">
        <TopPicks />
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
