import React from "react";

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

export default Checkbox;
