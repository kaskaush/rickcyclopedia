import React from "react";
import { string, func, arrayOf, object } from "prop-types";

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

Select.propTypes = {
  id: string,
  ariaLabel: string,
  testId: string,
  defaultValue: string,
  onChange: func || undefined,
  optionsData: arrayOf(object),
  _class: string,
};

export default Select;
