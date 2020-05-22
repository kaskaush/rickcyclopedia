import React from "react";
import { string } from "prop-types";

const NoResults = ({ message = "" }) => {
  return (
    <div className="no-results">
      <p className="no-results__message">{message}</p>
    </div>
  );
};

NoResults.propTypes = {
  message: string,
};

export default NoResults;
