import React, { useContext } from "react";
import FilterCategory from "./sub-components/FilterCategory";
import Button from "../../core-components/Button";
import { store } from "../../config/store";

const Filters = () => {
  const state = useContext(store).state;
  const { labels, filterCategories } = state;

  return (
    <div className="filters">
      <div className="filters__title-section">
        <h3 className="filters__title">{labels.lblFiltersTitle}</h3>
        <Button isIcon _class="filters__toggle">
          +
        </Button>
      </div>
      <div className="filters__section">
        {filterCategories.map((filterCategory) => {
          return (
            <FilterCategory key={filterCategory.type} {...filterCategory} />
          );
        })}
      </div>
    </div>
  );
};

export default Filters;
