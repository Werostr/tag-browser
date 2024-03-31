import React from "react";
import { InputLabel, MenuItem, Select } from "@mui/material";

export default function SelectField({
  name,
  //nameSize, 14
  variant,
  value,
  width,
  onChange,
  options,
}) {
  return (
    <>
      <InputLabel id={name} sx={{ fontSize: 14 }}>
        {name}
      </InputLabel>
      <Select
        labelId={name}
        variant={variant}
        value={value}
        sx={{ width: width }}
        onChange={onChange}
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
