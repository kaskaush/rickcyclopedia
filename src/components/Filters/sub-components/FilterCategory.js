import React from "react";

const FilterCategory = ({ title }) => {
  return (
    <>
      <div className="filters__category">
        <div className="filters__name-section">
          <h4 className="filters__name">{title}</h4>
        </div>
        <div className="filters__options">
          <ul className="filters__list">
            <li>
              <label className="custom-checkbox">
                test
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </li>
            <li>
              <label className="custom-checkbox">
                test
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </li>
            <li>
              <label className="custom-checkbox">
                test
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FilterCategory;
