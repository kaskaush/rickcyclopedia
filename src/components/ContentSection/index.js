import React from "react";
import SelectedFilters from "../SelectedFilters";
import SearchAndSort from "../SearchAndSort";
import ResultsSection from "../ResultsSection";

const ContentSection = () => {
  return (
    <div className="content-section">
      <SelectedFilters />
      <SearchAndSort />
      <ResultsSection />
    </div>
  );
};

export default ContentSection;
