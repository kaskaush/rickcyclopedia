import React from "react";
import { objectOf, string, number, oneOfType, object, array } from "prop-types";
import { getTimestamp } from "../../utility/getRelativeTimestamp";
import {
  LBL_CREATED,
  LBL_STATUS,
  LBL_SPECIES,
  LBL_GENDER,
  LBL_ORIGIN,
  LBL_LAST_LOCATION,
} from "../../utility/constants";

const CharacterCard = ({ character = {} }) => {
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
              {`id: ${id} - ${LBL_CREATED} ${getTimestamp(created)}`}
            </span>
          </div>
        </div>
      </div>
      <div className="character-card__content-section">
        <div className="character-card__desc-item">
          <span className="character-card__desc-type">{LBL_STATUS}</span>
          <span className="character-card__desc-data">{status}</span>
        </div>
        <div className="character-card__desc-item">
          <span className="character-card__desc-type">{LBL_SPECIES}</span>
          <span className="character-card__desc-data">{species}</span>
        </div>
        <div className="character-card__desc-item">
          <span className="character-card__desc-type">{LBL_GENDER}</span>
          <span className="character-card__desc-data">{gender}</span>
        </div>
        <div className="character-card__desc-item">
          <span className="character-card__desc-type">{LBL_ORIGIN}</span>
          <span className="character-card__desc-data">{origin.name}</span>
        </div>
        <div className="character-card__desc-item">
          <span className="character-card__desc-type">{LBL_LAST_LOCATION}</span>
          <span className="character-card__desc-data">{location.name}</span>
        </div>
      </div>
    </div>
  );
};

CharacterCard.propTypes = {
  labels: objectOf(string),
  character: objectOf(oneOfType([string, number, object, array])),
};

export default CharacterCard;
