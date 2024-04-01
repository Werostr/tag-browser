import React, { useState, useEffect, useMemo } from "react";
import { Table, TableContainer, Paper } from "@mui/material";

import DataTableHead from "./DataTableHead";
import DataTableBody from "./DataTableBody";
import axios from "axios";
import DataTableFooter from "./DataTableFooter";
import { PropTypes } from "prop-types";

export default function DataTable({
  page,
  tagsPerPage,
  setPage,
  sortBy,
  sortOrder,
}) {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(
          `https://api.stackexchange.com/2.3/tags?order=${sortOrder}&sort=${sortBy}&site=stackoverflow`
        );
        setTags(response.data.items);
        setLoading(false);
        setError(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    };

    fetchTags();
  }, [sortBy, sortOrder]);

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
};

DataTable.defaultProps = {
  page: 1,
  tagsPerPage: 5,
  sortBy: "popular",
  sortOrder: "desc",
};
