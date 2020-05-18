import React from "react";

const Card = () => {
  return (
    <div className="character-card">
      <div className="character-card__image-section">
        <img src="" alt="img" className="character-card__image" />
        <div className="character-card__title-wrapper">
          <div className="character-card__title-section">
            <h4 className="character-card__title">Title</h4>
            <span className="character-card__details">
              id:111 - Created 2 years ago
            </span>
          </div>
        </div>
      </div>
      <div className="character-card__content-section">
        <div className="character-card__desc-item">
          <span className="character-card__desc-type">Status</span>
          <span className="character-card__desc-data">Alive</span>
        </div>
        <div className="character-card__desc-item">
          <span className="character-card__desc-type">Species</span>
          <span className="character-card__desc-data">Alive</span>
        </div>
        <div className="character-card__desc-item">
          <span className="character-card__desc-type">Gender</span>
          <span className="character-card__desc-data">Alive</span>
        </div>
        <div className="character-card__desc-item">
          <span className="character-card__desc-type">Origin</span>
          <span className="character-card__desc-data">Alive</span>
        </div>
        <div className="character-card__desc-item">
          <span className="character-card__desc-type">Last Location</span>
          <span className="character-card__desc-data">Alive</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
