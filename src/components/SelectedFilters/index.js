import React, { useContext } from "react";
import Chip from "../../core-components/Chip";
import { store } from "../../config/store";
import { LBL_SELECTED_FILTERS_TITLE } from "../../utility/constants";

const SelectedFilters = () => {
  const state = useContext(store).state;
  const { selectedFilters } = state;

  return selectedFilters && selectedFilters.size > 0 ? (
    <>
      <div className="selected-filters">
        <h3 className="selected-filters__title">
          {LBL_SELECTED_FILTERS_TITLE}
        </h3>
        <div className="selected-filters__chips-section">
          {Array.from(selectedFilters).map((selFilter) => {
            return <Chip key={selFilter} label={selFilter} />;
          })}
        </div>
      </div>
    </>
  ) : null;
};

export default SelectedFilters;
