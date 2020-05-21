import React, { createContext, useReducer } from "react";
import context from "./context";
import cloneDeep from "lodash.clonedeep";
import { getFilteredData, getSearchData, getSortedData } from "./helpers";

const initialState = context;
const store = createContext(initialState);
const { Provider } = store;

let cloneData = null;
let appliedFilters = new Set();

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "FETCH_DATA":
        cloneData = cloneDeep(action.payload.results);
        return { ...state, data: action.payload };

      case "SEARCH_CHAR":
        const searchResults = getSearchData(cloneData, action.payload);
        return { ...state, data: { ...state.data, results: searchResults } };

      case "APPLY_FILTER":
        let filter = { [action.payload.type]: action.payload.optionType };
        appliedFilters.add(action.payload);
        let updatedFilterContext = state.filterCategories;

        updatedFilterContext.forEach((category) => {
          if (category.type === action.payload.type) {
            category.options.forEach((option) => {
              if (option.type === action.payload.optionType) {
                option.isSelected = action.payload.isChecked;
              }
            });
          }
        });
        const filterResults = getFilteredData(state.data.results, filter);
        return {
          ...state,
          filterCategories: updatedFilterContext,
          data: { ...state.data, results: filterResults },
        };

      case "SORT_DATA":
        const sortedResults = getSortedData(state.data.results, action.payload);
        return { ...state, data: { ...state.data, results: sortedResults } };
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
