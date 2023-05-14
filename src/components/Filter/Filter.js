import React from "react";
import { useState } from "react";

import "./Filter.scss";
import { useSelector } from "react-redux";
import FilterSkeleton from "../Skeleton/FilterSkeleton";
import FilterIcon from "../../assets/Filter-Icon.svg";
import { filterOptions, rangeFilterOptions } from "../../constants/options";

const Filter = ({
  setSelectedFilters,
  selectedFilters,
  rangeFilters,
  setRangeFilters,
}) => {
  const isLoading = useSelector((state) => state.property.isLoading);
  const [toggle, setToggle] = useState(false);

  const handleFilter = (e) => {
    const filterName = e.target.name;
    setSelectedFilters((prev) => ({
      ...prev,
      [filterName]: e.target.value,
    }));
  };

  const handleRangeFilter = (e) => {
    const filterName = e.target.name;
    const value = JSON.parse(e.target.value);
    setRangeFilters((prev) => ({ ...prev, [filterName]: value }));
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
            {rangeFilterOptions.map((item) => (
              <section className="col-sm-12 col-md-6 col-lg-3" key={item.name}>
                <select
                  name={item?.name}
                  onChange={(e) => handleRangeFilter(e)}
                  value={rangeFilters?.[item?.name] || "none"}
                >
                  <option value="none" disabled hidden>
                    Select a {item.label}
                  </option>
                  {item.value.map((val, index) => (
                    <option
                      key={`${val?.rangeLabel}--${index}`}
                      value={JSON.stringify({ min: val?.min, max: val?.max })}
                    >
                      {val?.rangeLabel}
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
