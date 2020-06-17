import React, { useContext } from "react";
import CharacterCard from "../../core-components/CharacterCard";
import { store } from "../../config/store";

const ResultsSection = () => {
  const state = useContext(store).state;
  const { data } = state;

  return (
    <div className="results-section">
      {data &&
        data.results.map((character) => {
          return (
            <CharacterCard
              key={`${character.id}_${character.name}`}
              character={character}
            />
          );
        })}
    </div>
  );
};

export default ResultsSection;
