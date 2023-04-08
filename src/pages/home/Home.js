import React, { useEffect } from "react";
import TopPicks from "../../components/Toppicks/TopPicks";
import Slider from "../../components/shared/Slider/Slider";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

import { fetchAllProperties } from "../../store/slice/property/propertySlice";
import { userInfo } from "../../store/slice/users/userSlice";
import { useDispatch, useSelector } from "react-redux";
import ShowMore from "../../components/Show More/ShowMore";
import "./Home.scss";
import Filter from "../../components/Filter/Filter";

const Home = () => {
  const dispatch = useDispatch();

  const properties = useSelector((state) => state.property.allProperties);

  useEffect(() => {
    dispatch(fetchAllProperties());
    dispatch(userInfo());
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
      <Filter />
      <div className="container homepage">
        <TopPicks properties={toppicks} />
        <Slider title="All Properties" properties={properties} />
        <Slider title="Flat" properties={flats} />
        <ShowMore title="Flat" />
        <Slider title="PG" properties={pgs} />
        <ShowMore title="PG" />
        <Slider title="Apartment" properties={apartments} />
        <ShowMore title="Apartment" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
