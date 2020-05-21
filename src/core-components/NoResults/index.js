import React from "react";

const NoResults = ({ message = "" }) => {
  return (
    <div className="no-results">
      <p className="no-results__message">{message}</p>
    </div>
  );
};

export default NoResults;
