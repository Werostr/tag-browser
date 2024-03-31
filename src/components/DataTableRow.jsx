import React from "react";
import { TableCell, TableRow } from "@mui/material";

export default function DataTableRow({
  cells = [""],
  component,
  colSpan,
  height = 53,
}) {
  return (
    <TableRow sx={{ height: height }}>
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
