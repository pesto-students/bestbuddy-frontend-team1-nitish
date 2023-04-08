import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Category.scss";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/shared/Slider/Slider";
import { fetchPropertiesByCategory } from "../../store/slice/property/propertySlice";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumbs from '../../components/BreadCrumbs/Breadcrumbs';
import SliderCard from "../../components/Card/SliderCard";

const Category = () => {
  const dispatch = useDispatch();
  const { categoryname = "" } = useParams();

  useEffect(() => {
    dispatch(fetchPropertiesByCategory(categoryname));
  }, []);

  const properties = useSelector(
    (state) => state.property.propertiesBycategory
  );

  return (
    <div>
      <Navbar />
      <div className="container categorypage">
        <div className="top-bar">
          <Breadcrumbs title={categoryname} />
          <input
            className="top-bar-search"
            type="search"
            name="search"
            id="search"
            placeholder="Search Rooms"
          />
        </div>
        <div className="category-card-container">
          {properties.map((item) => (
            <SliderCard property={item} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Category;
