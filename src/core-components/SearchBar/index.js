import React, { useState } from "react";
import Button from "../Button";

const SearchBar = ({
  inputLabel = "",
  btnLabel = "",
  handleSearch = undefined,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    handleSearch(searchTerm.trim());
    e.preventDefault();
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearchSubmit}>
        <label htmlFor="search-term" className="search-bar__title">
          {inputLabel}
        </label>
        <div className="search-bar__input-section">
          <input
            id="search-term"
            type="text"
            className="search-bar__input"
            onChange={handleSearchTerm}
          />
          <Button type="submit" onClick={handleSearchSubmit}>
            {btnLabel}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
