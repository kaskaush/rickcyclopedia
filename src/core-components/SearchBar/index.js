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

  const handleSearchSubmit = () => {
    handleSearch(searchTerm.trim());
  };

  return (
    <div className="search-bar">
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
        <Button onClick={handleSearchSubmit}>{btnLabel}</Button>
      </div>
    </div>
  );
};

export default SearchBar;
