import React from "react";
import { string, bool, func } from "prop-types";

const Checkbox = ({
  id = "",
  label = "",
  isChecked = false,
  onChange = undefined,
  _class = "",
  testId = "",
}) => {
  return (
    <label className={`checkbox ${_class}`}>
      {label}
      <input
        id={id}
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        data-test-id={testId}
      />
      <span className="checkmark"></span>
    </label>
  );
};

Checkbox.propTypes = {
  id: string,
  label: string,
  isChecked: bool,
  onChange: func || undefined,
  _class: string,
  testId: string,
};

export default Checkbox;
