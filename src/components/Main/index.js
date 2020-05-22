import React, { useContext, useEffect } from "react";
import Sidebar from "../Sidebar";
import ContentSection from "../ContentSection";
import { store } from "../../config/store";
import { apiService } from "../../utility/apiService";
import Spinner from "../../core-components/Spinner";

const Main = () => {
  const context = useContext(store);
  const { state, dispatch } = context;

  const fetchData = (page = "") => {
    const promise = apiService({ url: page, data: { requestType: "GET" } });
    promise.then((details) => {
      const { response, error } = details;

      if (response) {
        const responsePayload = response.data;
        dispatch({ type: "FETCH_DATA", payload: responsePayload });
      }

      if (error) {
        const errorPayload = error.data;

        if (errorPayload) {
          dispatch({ type: "CLEAR_DATA" });
        }
      }
    });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="main">
      {state.data && Object.keys(state.data).length > 0 ? (
        <>
          <Sidebar />
          <ContentSection fetchData={fetchData} />
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Main;
