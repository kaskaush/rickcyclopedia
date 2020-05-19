import React from "react";

const Select = ({
  id = "",
  ariaLabel = "",
  testId = "",
  defaultValue = "",
  onChange = undefined,
  optionsData = [],
  _class = "",
}) => {
  return (
    <select
      id={id}
      aria-label={ariaLabel}
      data-test-id={testId}
      defaultValue={defaultValue}
      onChange={onChange}
      className={`select ${_class}`}
    >
      {optionsData &&
        optionsData.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          );
        })}
    </select>
  );
};

export default Select;
