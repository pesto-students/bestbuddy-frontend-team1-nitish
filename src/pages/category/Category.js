import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./Category.scss";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { fetchPropertiesByCategory } from "../../store/slice/property/propertySlice";
import { useDispatch, useSelector } from "react-redux";
import SliderCard from "../../components/Card/SliderCard";
import Breadcrumbs from "../../components/BreadCrumbs/Breadcrumbs";

const Category = () => {
  const dispatch = useDispatch();
  const { categoryname = "" } = useParams();
  const { propertiesBycategory, isLoading } = useSelector((state) => state.property);

  const data = isLoading ? Array(8).fill(0) : propertiesBycategory;

  useEffect(() => {
    dispatch(fetchPropertiesByCategory(categoryname));
  }, []);

  const breadcrumbData = [
    {
      id: 1,
      name: 'Home',
      url: "/",
    },
    {
      id: 2,
      name: categoryname,
      url: ``,
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="container categorypage">
        <div className="top-bar">
          <h4 className="top-bar-h4">
            <Breadcrumbs data={breadcrumbData}/>
          </h4>
          <input
            className="top-bar-search"
            type="search"
            name="search"
            id="search"
            placeholder="Search Rooms"
          />
        </div>
        <div className="category-card-container">
          {data.map((item, index) => (
            <SliderCard property={item} key={index} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Category;
