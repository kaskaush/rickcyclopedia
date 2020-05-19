import React from "react";
import Filters from "../Filters";

const Sidebar = ({}) => {
  return (
    <div className="side-bar">
      <div className="side-bar__content">
        <Filters />
      </div>
    </div>
  );
};

export default Sidebar;
