import DataTableRow from "./DataTableRow";
import { TableHead } from "@mui/material";

export default function DataTableHead({ backgroundColor }) {
  return (
    <TableHead sx={{ backgroundColor: backgroundColor }}>
      <DataTableRow cells={["Tag", "Count"]} />
    </TableHead>
  );
}
