import React from "react";
import Checkbox from "../../../core-components/Checkbox";

const FilterCategory = ({ type, options, applyFilters }) => {
  return (
    <>
      <div className="filters__category">
        <div className="filters__name-section">
          <h4 className="filters__name">{type}</h4>
        </div>
        <div className="filters__options">
          <ul className="filters__list">
            {options &&
              options.map((option) => {
                return (
                  <li key={option.type}>
                    <Checkbox
                      label={option.type}
                      isChecked={option.isSelected}
                      onChange={(e) => {
                        applyFilters(type, option.type, e.target.checked);
                      }}
                    />
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default FilterCategory;
