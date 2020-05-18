import React from "react";

const SearchAndSort = () => {
  return (
    <div className="search-sort">
      <div className="search-sort__search-section">
        <label htmlFor="search-term" className="search-sort__search-title">
          Search by name
        </label>
        <div className="search-sort__input-section">
          <input id="search-term" type="text" className="custom-input" />
          <button type="button" className="custom-btn">
            Search
          </button>
        </div>
      </div>
      <div className="search-sort__sort-section">
        <select className="custom-select search-sort__sort">
          <option>Sort by ID</option>
          <option>Sort by Name</option>
        </select>
        <button type="button" className="custom-btn icon">
          &#9650;
        </button>
        <button type="button" className="custom-btn icon">
          &#9660;
        </button>
      </div>
    </div>
  );
};

export default SearchAndSort;
