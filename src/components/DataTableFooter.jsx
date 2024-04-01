import DataTableRow from "./DataTableRow";
import { Pagination, TableFooter } from "@mui/material";
import { PropTypes } from "prop-types";

export default function DataTableFooter({
  backgroundColor,
  page,
  setPage,
  pagesNumber,
}) {
  return (
    <TableFooter sx={{ backgroundColor: backgroundColor }}>
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

DataTableFooter.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  pagesNumber: PropTypes.number.isRequired,
};

DataTableFooter.defaultProps = {
  backgroundColor: "rgb(94, 132, 194,0.53)",
  page: 1,
};
