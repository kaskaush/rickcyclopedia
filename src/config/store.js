import React, { createContext, useReducer } from "react";
import context from "./context";
import cloneDeep from "lodash.clonedeep";
import filter from "lodash.filter";

const initialState = context;
const store = createContext(initialState);
const { Provider } = store;

let cloneData = null;

const getSearchData = (baseData, searchTerm) => {
  let filteredData = filter(cloneData, (character) => {
    character.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return filteredData;
};

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "FETCH_DATA":
        cloneData = cloneDeep(action.payload.results);
        return { ...state, data: action.payload };

      case "SEARCH_CHAR":
        const results = getSearchData(state.data.results, action.payload);
        return { ...state, data: { ...state.data, results: results } };
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
