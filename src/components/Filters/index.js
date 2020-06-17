import React, { useContext, useState } from "react";
import FilterCategory from "./sub-components/FilterCategory";
import Button from "../../core-components/Button";
import { store } from "../../config/store";
import { ACT_APPLY_FILTER, LBL_FILTERS_TITLE } from "../../utility/constants";

const Filters = () => {
  const context = useContext(store);
  const {
    state: { filterCategories },
    dispatch,
  } = context;

  const [expandOrCollapse, setExpandOrCollapse] = useState(false);

  const applyFilters = (type, optionType, isChecked) => {
    dispatch({
      type: ACT_APPLY_FILTER,
      payload: { type, optionType, isChecked },
    });
  };

  const toggleFilterSection = () => {
    setExpandOrCollapse(!expandOrCollapse);
  };

  return (
    <div className="filters">
      <div className="filters__title-section">
        <h3 className="filters__title">{LBL_FILTERS_TITLE}</h3>
        <Button isIcon _class="filters__toggle" onClick={toggleFilterSection}>
          <i className={`fa fa-${expandOrCollapse ? "minus" : "plus"}`}></i>
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
