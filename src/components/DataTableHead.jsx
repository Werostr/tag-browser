import DataTableRow from "./DataTableRow";
import { TableHead } from "@mui/material";
import { PropTypes } from "prop-types";

export default function DataTableHead({ backgroundColor }) {
  return (
    <TableHead sx={{ backgroundColor: backgroundColor }}>
      <DataTableRow cells={["Tag", "Count"]} />
    </TableHead>
  );
}

DataTableHead.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
};

DataTableHead.defaultProps = {
  backgroundColor: "rgb(94, 132, 194,0.7)",
};
