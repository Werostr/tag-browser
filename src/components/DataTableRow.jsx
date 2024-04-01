import React from "react";
import { TableCell, TableRow } from "@mui/material";
import { PropTypes } from "prop-types";

export default function DataTableRow({
  cells = [""],
  component,
  colSpan,
  height = 53,
  hover,
}) {
  return (
    <TableRow sx={{ height: height }} hover={hover}>
      {cells &&
        cells.map((cell) => (
          <TableCell
            key={cell}
            colSpan={colSpan}
            align="center"
            sx={{ width: `${100 / cells.length}%` }}
          >
            {cell}
            {component}
          </TableCell>
        ))}
    </TableRow>
  );
}

DataTableRow.propTypes = {
  cells: PropTypes.arrayOf(PropTypes.string).isRequired,
  component: PropTypes.node,
  colSpan: PropTypes.number,
  height: PropTypes.number,
  hover: PropTypes.bool,
};

DataTableRow.defaultProps = {
  cells: [""],
  height: 53,
};
