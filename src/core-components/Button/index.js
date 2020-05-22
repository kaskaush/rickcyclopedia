import React from "react";
import { string, bool, func, node } from "prop-types";

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

Button.propTypes = {
  id: string,
  isIcon: bool,
  _class: string,
  ariaLabel: string,
  onClick: func || undefined,
  testId: string,
  children: node,
  type: string,
};

export default Button;
