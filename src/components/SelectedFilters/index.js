import React, { useContext } from "react";
import Chip from "../../core-components/Chip";
import { store } from "../../config/store";

const SelectedFilters = () => {
  const state = useContext(store).state;
  const { labels } = state;

  return (
    <div className="selected-filters">
      <h3 className="selected-filters__title">
        {labels.lblSelectedFiltersTitle}
      </h3>
      <Chip label="test" />
    </div>
  );
};

export default SelectedFilters;
