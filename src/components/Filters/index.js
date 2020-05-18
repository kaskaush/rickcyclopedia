import React from "react";
import FilterCategory from "./sub-components/FilterCategory";

const Filters = () => {
  const filters = ["status", "species", "gender", "origin"];

  return (
    <div className="filters">
      <div className="filters__title-section">
        <h3 className="filters__title">Filters</h3>
        <button className="custom-btn icon filters__toggle">+</button>
      </div>
      <div className="filters__section">
        {filters.map((filter) => {
          return <FilterCategory title={filter} />;
        })}
      </div>
    </div>
  );
};

export default Filters;
