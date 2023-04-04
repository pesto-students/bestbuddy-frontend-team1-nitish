import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Category.scss";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/shared/Slider/Slider";
import Breadcrumbs from "../../components/BreadCrumbs/Breadcrumbs";
import { fetchPropertiesByCategory } from "../../store/slice/property/propertySlice";
import { useDispatch, useSelector } from "react-redux";
import SliderCard from "../../components/Card/SliderCard";

const Category = () => {
  const dispatch = useDispatch();
  const { categoryname = "" } = useParams();

  useEffect(() => {
    dispatch(fetchPropertiesByCategory(categoryname));
  }, []);

  const properties = useSelector((state) => state.property.propertiesBycategory);

  return (
    <>
      <Navbar />
      <Breadcrumbs title={categoryname} />
      <div className="container category-list">
        {properties.map((item) => (
          <SliderCard property={item} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Category;
