import React, { useContext, useState } from "react";
import FilterCategory from "./sub-components/FilterCategory";
import Button from "../../core-components/Button";
import { store } from "../../config/store";

const Filters = () => {
  const context = useContext(store);
  const {
    state: { labels, filterCategories },
    dispatch,
  } = context;

  const [expandOrCollapse, setExpandOrCollapse] = useState(false);

  const applyFilters = (type, optionType, isChecked) => {
    if (isChecked) {
      dispatch({
        type: "APPLY_FILTER",
        payload: { type, optionType, isChecked },
      });
    }
  };

  const toggleFilterSection = () => {
    setExpandOrCollapse(!expandOrCollapse);
  };

  return (
    <div className="filters">
      <div className="filters__title-section">
        <h3 className="filters__title">{labels.lblFiltersTitle}</h3>
        <Button isIcon _class="filters__toggle" onClick={toggleFilterSection}>
          &#65291;
        </Button>
      </div>
      <div className={`filters__section ${expandOrCollapse ? "expanded" : ""}`}>
        {filterCategories.map((filterCategory) => {
          return (
            <FilterCategory
              key={filterCategory.type}
              {...filterCategory}
              applyFilters={applyFilters}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Filters;
