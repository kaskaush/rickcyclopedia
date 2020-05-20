import React from "react";
import { getTimestamp } from "../../utility/getRelativeTimestamp";

const CharacterCard = ({ labels = {}, character = {} }) => {
  const {
    lblStatus,
    lblSpecies,
    lblGender,
    lblOrigin,
    lblLastLocation,
  } = labels;

  const {
    name = "",
    id = "",
    status = "",
    species = "",
    gender = "",
    origin = {},
    location = {},
    image = "",
    created = "",
  } = character;

  return (
    <div className="character-card">
      <div className="character-card__image-section">
        <img src={image} alt={name} className="character-card__image" />
        <div className="character-card__title-wrapper">
          <div className="character-card__title-section">
            <h4 className="character-card__title">{name}</h4>
            <span className="character-card__details">
              {`id: ${id} - Created ${getTimestamp(created)}`}
            </span>
          </div>
        </div>
      </div>
      <div className="character-card__content-section">
        <div className="character-card__desc-item">
          <span className="character-card__desc-type">{lblStatus}</span>
          <span className="character-card__desc-data">{status}</span>
        </div>
        <div className="character-card__desc-item">
          <span className="character-card__desc-type">{lblSpecies}</span>
          <span className="character-card__desc-data">{species}</span>
        </div>
        <div className="character-card__desc-item">
          <span className="character-card__desc-type">{lblGender}</span>
          <span className="character-card__desc-data">{gender}</span>
        </div>
        <div className="character-card__desc-item">
          <span className="character-card__desc-type">{lblOrigin}</span>
          <span className="character-card__desc-data">{origin.name}</span>
        </div>
        <div className="character-card__desc-item">
          <span className="character-card__desc-type">{lblLastLocation}</span>
          <span className="character-card__desc-data">{location.name}</span>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
