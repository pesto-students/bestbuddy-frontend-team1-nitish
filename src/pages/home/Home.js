import React, { useCallback, useEffect, useState } from "react";
import TopPicks from "../../components/Toppicks/TopPicks";
import Slider from "../../components/shared/Slider/Slider";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

import { fetchAllProperties } from "../../store/slice/property/propertySlice";
import { useDispatch, useSelector } from "react-redux";
import ShowMore from "../../components/Show More/ShowMore";
import "./Home.scss";
import Filter from "../../components/Filter/Filter";
import { emptyData } from "../../utils/formFieldHelpers";

const Home = () => {
  const [selectedFilters, setSelectedFilters] = useState({});
  const dispatch = useDispatch();
  const { allProperties, isLoading } = useSelector((state) => state.property);

  const getAllProperties = useCallback(() => {
    dispatch(fetchAllProperties(selectedFilters));
    // eslint-disable-next-line
  }, [selectedFilters]);

  useEffect(() => {
    getAllProperties();
    // eslint-disable-next-line
  }, [getAllProperties]);

  const category = allProperties.map((catg) => catg.category);
  const categoryList = Array.from(new Set(category));
  const toppicks = allProperties.filter(
    (property, index) => property.city === "Delhi" && index <= 6
  );

  const data = isLoading
    ? emptyData
    : categoryList.map((catog) =>
        allProperties.filter((property) => property.category === catog)
      );

  return (
    <div>
      <Navbar />
      <Filter {...{ setSelectedFilters, selectedFilters }} />
      <div className="container homepage">
        <TopPicks properties={toppicks} />
        {!isLoading &&
          data?.map((item, index) => (
            <React.Fragment key={`${item?.[0].category}--${index}`}>
              <Slider title={item?.[0].category} properties={item} />
              <ShowMore title={item?.[0].category} />
            </React.Fragment>
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
