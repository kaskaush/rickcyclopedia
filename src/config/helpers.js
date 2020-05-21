import filter from "lodash.filter";
import orderBy from "lodash.orderby";

const getSearchData = (cloneData, searchTerm) => {
  let filteredData = filter(cloneData, (character) => {
    return character.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return filteredData;
};

const getFilteredData = (baseData, filterData) => {
  let filteredData = filter(baseData, filterData);
  return filteredData;
};

const getSortedData = (baseData, sortParams) => {
  let sortedData = orderBy(
    baseData,
    [sortParams.sortParam],
    [sortParams.sortOrder]
  );

  return sortedData;
};

export { getFilteredData, getSearchData, getSortedData };
