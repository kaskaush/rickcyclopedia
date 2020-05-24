import filter from "lodash.filter";
import orderBy from "lodash.orderby";

const getSearchData = (cloneData, searchTerm) => {
  let filteredData = filter(cloneData, (character) => {
    return character.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return filteredData;
};

const getFilteredData = (updatedData, cloneData, filterData) => {
  let filteredData = [];
  let filterObj = new Map();

  filterData.forEach((filter) => {
    filter.options.forEach((option) => {
      if (option.isSelected) {
        if (!filterObj.has(filter.type)) {
          let optionsArray = [];
          optionsArray.push(option.type);
          filterObj.set(filter.type, optionsArray);
        } else {
          filterObj.get(filter.type).push(option.type);
        }
      } else {
        if (filterObj.has(filter.type)) {
          const optionsInMap = filterObj.get(filter.type);
          const index = optionsInMap && optionsInMap.indexOf(option.type);
          if (index !== -1) optionsInMap.splice(index, 1);
        }
      }
    });
  });

  if (filterObj.size) {
    filterObj.forEach((value, key) => {
      value.forEach((filData) => {
        let obj = { [key]: filData };
        let foundData = filter(cloneData, obj);
        filteredData.push(...foundData);
      });
    });
  }

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
