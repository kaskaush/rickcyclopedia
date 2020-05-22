import React from "react";

const Chip = ({ label = "", onClose = undefined }) => {
  return (
    <div className="chip">
      <span className="chip__label">{label}</span>
      {onClose && (
        <button
          type="button"
          className="chip__closebtn"
          onClick={onClose}
          aria-label="close chip"
        ></button>
      )}
    </div>
  );
};

export default Chip;
