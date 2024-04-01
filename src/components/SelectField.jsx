import React from "react";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { PropTypes } from "prop-types";

export default function SelectField({
  fieldName,
  variant,
  value,
  width,
  onChange,
  options,
  disabled,
}) {
  return (
    <>
      <InputLabel id={fieldName} sx={{ fontSize: 14 }} disabled={disabled}>
        {fieldName}
      </InputLabel>
      <Select
        labelId={fieldName}
        variant={variant}
        value={value}
        sx={{ width: width }}
        onChange={onChange}
        disabled={disabled}
      >
        {options &&
          options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
      </Select>
    </>
  );
}

SelectField.propTypes = {
  fieldName: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["filled", "outlined", "standard"]).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  width: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  disabled: PropTypes.bool.isRequired,
};

SelectField.defaultProps = {
  variant: "standard",
  disabled: false,
};
