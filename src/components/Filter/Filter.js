import React from "react";
import { useState } from "react";

import "./Filter.scss";
import { useSelector } from "react-redux";
import FilterSkeleton from "../Skeleton/FilterSkeleton";
import FilterIcon from "../../assets/Filter-Icon.svg";
import { filterOptions } from "../../constants/options";

const Filter = ({ setSelectedFilters, selectedFilters }) => {
  const isLoading = useSelector((state) => state.property.isLoading);
  const [toggle, setToggle] = useState(false);

  const handleFilter = (e) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="container filter-container">
      {isLoading ? (
        <FilterSkeleton />
      ) : (
        <>
          <p onClick={() => setToggle(!toggle)}>
            <span>
              Search Properties by Filter
              <img className="filtericon" src={FilterIcon} alt="FilterIcon" />
            </span>
            <span className={`arrow ${toggle ? "up" : "down"}`}></span>
          </p>
          <div className={`row filter-section ${toggle ? "show" : ""}`}>
            {filterOptions.map((item) => (
              <section className="col-sm-12 col-md-6 col-lg-3" key={item.name}>
                <select
                  name={item.name}
                  onChange={(e) => handleFilter(e)}
                  value={selectedFilters?.[item?.name] || "none"}
                >
                  <option value="none" disabled hidden>
                    Select a {item.label}
                  </option>
                  {item.value.map((val) => (
                    <option key={val} value={val}>
                      {val}
                    </option>
                  ))}
                </select>
              </section>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Filter;
