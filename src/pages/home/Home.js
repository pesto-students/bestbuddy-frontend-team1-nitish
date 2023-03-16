import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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

  return (
    <div>
      <Navbar />
      <LocationSearch />
      {/* <Link to={"/details/1"}>Details</Link> */}
      <div className="container">
        <TopPicks />
        <Slider properties={properties} />
        {/* <Slider title="Flats"/>
        <Slider title="Apartment"/>
        <Slider title="Residency"/> */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
