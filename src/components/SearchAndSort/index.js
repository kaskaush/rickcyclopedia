import React, { useContext } from "react";
import Button from "../../core-components/Button";
import Select from "../../core-components/Select";
import SearchBar from "../../core-components/SearchBar";
import { store } from "../../config/store";

const SearchAndSort = () => {
  const state = useContext(store).state;
  const { labels, sortOptions } = state;

  return (
    <div className="search-sort">
      <SearchBar
        inputLabel={labels.lblSearchLabel}
        btnLabel={labels.lblSearchCtaLabel}
      />
      <div className="search-sort__sort-section">
        <Select _class="search-sort__sort" optionsData={sortOptions} />
        <Button isIcon>&#9650;</Button>
        <Button isIcon>&#9660;</Button>
      </div>
    </div>
  );
};

export default SearchAndSort;
