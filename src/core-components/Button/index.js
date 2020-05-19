import React from "react";

const Button = ({
  id = "",
  isIcon = false,
  _class = "",
  ariaLabel = "",
  onClick = undefined,
  testId = "",
  children = null,
  type = "button",
}) => {
  return (
    <button
      type={type}
      id={id}
      className={`btn ${isIcon ? "btn-icon" : ""} ${_class}`}
      aria-label={ariaLabel}
      onClick={onClick}
      data-test-id={testId}
    >
      {children}
    </button>
  );
};

export default Button;
