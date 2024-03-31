import DataTableRow from "./DataTableRow";
import { Pagination, TableFooter } from "@mui/material";

export default function DataTableFooter({
  backgroundColor,
  page,
  setPage,
  pagesNumber,
}) {
  return (
    <TableFooter sx={{ backgroundColor: "rgb(94, 132, 194,0.53)" }}>
      <DataTableRow
        colSpan={2}
        component={
          <Pagination
            sx={{ display: "flex", justifyContent: "center" }}
            showFirstButton
            showLastButton
            shape="rounded"
            count={pagesNumber}
            page={page}
            onChange={(e, p) => setPage(p)}
          />
        }
      />
    </TableFooter>
  );
}
