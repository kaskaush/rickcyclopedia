import React, { useContext, useState } from "react";
import Button from "../../core-components/Button";
import Select from "../../core-components/Select";
import SearchBar from "../../core-components/SearchBar";
import { store } from "../../config/store";
import {
  ACT_SEARCH_CHAR,
  ACT_SORT_DATA,
  LBL_SEARCH,
  LBL_SEARCH_CTA,
} from "../../utility/constants";

const SearchAndSort = () => {
  const { state, dispatch } = useContext(store);
  const [sortParam, setSortParam] = useState("id");
  const { sortOptions } = state;

  const searchCharacter = (searchTerm) => {
    dispatch({ type: ACT_SEARCH_CHAR, payload: searchTerm });
  };

  const handleSort = (sortOrder) => {
    dispatch({
      type: ACT_SORT_DATA,
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
        inputLabel={LBL_SEARCH}
        btnLabel={LBL_SEARCH_CTA}
        handleSearch={searchCharacter}
      />
      <div className="search-sort__sort-section">
        <Select
          _class="search-sort__sort"
          optionsData={sortOptions}
          defaultValue="id"
          onChange={handleSortParam}
        />
        <div className="search-sort__cta-section">
          <Button isIcon onClick={() => handleSort("asc")}>
            <i className="fa fa-chevron-up"></i>
          </Button>
          <Button isIcon onClick={() => handleSort("desc")}>
            <i className="fa fa-chevron-down"></i>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchAndSort;
