import React from "react";

const Chip = ({ label = "", onClose = undefined }) => {
  return (
    <div className="chip">
      {label}
      <button
        type="button"
        className="chip__closebtn"
        onClick={onClose}
        aria-label="close chip"
      ></button>
    </div>
  );
};

export default Chip;
