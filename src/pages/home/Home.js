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

  const category = properties.map((catg) => catg.category);
  const categoryList = Array.from(new Set(category));
  const toppicks = properties.filter((property, index) => property.city === "Delhi" && index <= 6);

  const data = categoryList.map((catog) => (
    properties.filter((property) => (
      property.category === catog
    ))
  ))

  return (
    <div>
      <Navbar />
      <Filter />
      <div className="container homepage">
        <TopPicks properties={toppicks} />
        {data.map((item) => (
          <>
            <Slider title={item[0].category} properties={item} />
            <ShowMore title={item[0].category} />
          </>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
