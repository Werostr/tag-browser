import React, { useMemo } from "react";
import { Table, TableContainer, Paper } from "@mui/material";
import DataTableHead from "./DataTableHead";
import DataTableBody from "./DataTableBody";
import DataTableFooter from "./DataTableFooter";
import { PropTypes } from "prop-types";

export default function DataTable({
  page,
  tagsPerPage,
  setPage,
  tags,
  loading,
  error,
}) {
  const pagesNumber = useMemo(() => {
    return Math.ceil(tags.length / tagsPerPage);
  }, [tagsPerPage, tags]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }}>
        <DataTableHead backgroundColor="rgb(94, 132, 194,0.7)" />
        <DataTableBody
          backgroundColor="rgb(94, 132, 194,0.5)"
          page={page}
          tags={tags}
          tagsPerPage={tagsPerPage}
          loading={loading}
          error={error}
        />
        <DataTableFooter
          page={page}
          setPage={setPage}
          pagesNumber={pagesNumber}
          backgroundColor="rgb(94, 132, 194,0.53)"
        />
      </Table>
    </TableContainer>
  );
}

DataTable.propTypes = {
  page: PropTypes.number.isRequired,
  tagsPerPage: PropTypes.oneOf([5, 10, 16]).isRequired,
  setPage: PropTypes.func.isRequired,
  sortBy: PropTypes.oneOf(["popular", "activity", "name"]).isRequired,
  sortOrder: PropTypes.oneOf(["desc", "asc"]).isRequired,
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

DataTable.defaultProps = {
  page: 1,
  tagsPerPage: 5,
  sortBy: "popular",
  sortOrder: "desc",
  tags: [],
  loading: true,
  error: false,
};
