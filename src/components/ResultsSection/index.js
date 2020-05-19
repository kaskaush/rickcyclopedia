import React, { useContext } from "react";
import CharacterCard from "../../core-components/CharacterCard";
import { store } from "../../config/store";

const ResultsSection = () => {
  const state = useContext(store).state;
  const { labels } = state;

  return (
    <div className="results-section">
      <CharacterCard labels={labels} />
      <CharacterCard labels={labels} />
      <CharacterCard labels={labels} />
      <CharacterCard labels={labels} />
      <CharacterCard labels={labels} />
      <CharacterCard labels={labels} />
    </div>
  );
};

export default ResultsSection;
