import React, { useContext, useState } from "react";
import Button from "../../core-components/Button";
import Select from "../../core-components/Select";
import SearchBar from "../../core-components/SearchBar";
import { store } from "../../config/store";

const SearchAndSort = () => {
  const { state, dispatch } = useContext(store);

  const [sortParam, setSortParam] = useState("id");

  const { labels, sortOptions } = state;

  const searchCharacter = (searchTerm) => {
    dispatch({ type: "SEARCH_CHAR", payload: searchTerm });
  };

  const handleSort = (sortOrder) => {
    dispatch({
      type: "SORT_DATA",
      payload: {
        sortParam,
        sortOrder,
      },
    });
  };

  const handleSortParam = (e) => {
    setSortParam(e.target.value);
  };

  return (
    <div className="search-sort">
      <SearchBar
        inputLabel={labels.lblSearchLabel}
        btnLabel={labels.lblSearchCtaLabel}
        handleSearch={searchCharacter}
      />
      <div className="search-sort__sort-section">
        <Select
          _class="search-sort__sort"
          optionsData={sortOptions}
          defaultValue="id"
          onChange={handleSortParam}
        />
        <Button isIcon onClick={() => handleSort("asc")}>
          &#9650;
        </Button>
        <Button isIcon onClick={() => handleSort("desc")}>
          &#9660;
        </Button>
      </div>
    </div>
  );
};

export default SearchAndSort;
