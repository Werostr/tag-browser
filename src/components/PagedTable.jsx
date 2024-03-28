import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import {
  ButtonGroup,
  IconButton,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  TableHead,
  Typography,
  Grid,
} from "@mui/material";
import TableControl from "./TableControl";

export default function PagedTable() {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [sortBy, setSortBy] = useState("popular");
  const [sortOrder, setSortOrder] = useState("desc");
  const [page, setPage] = useState(1);
  const [tagsPerPage, setTagsPerPage] = useState(5);

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
    console.log(sortBy);
    console.log(sortOrder);
    fetchTags();
  }, [sortBy, sortOrder]);

  const emptyRows =
    page > 0 ? Math.max(0, page * tagsPerPage - tags.length) : 0;

  return (
    <>
      <TableControl
        setPage={setPage}
        setSortBy={setSortBy}
        setSortOrder={setSortOrder}
        setTagsPerPage={setTagsPerPage}
        sortBy={sortBy}
        sortOrder={sortOrder}
        tagsPerPage={tagsPerPage}
      />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "rgb(94, 132, 194,0.7)" }}>
              <TableCell sx={{ paddingLeft: 5 }} align="center">
                Tag
              </TableCell>
              <TableCell align="center" sx={{ paddingRight: 5 }}>
                Count
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ backgroundColor: "rgb(94, 132, 194,0.5)" }}>
            {(tagsPerPage > 0
              ? tags.slice(
                  (page - 1) * tagsPerPage,
                  (page - 1) * tagsPerPage + tagsPerPage
                )
              : tags
            ).map((tag) => (
              <TableRow key={tag.name} hover>
                <TableCell
                  align="center"
                  component="th"
                  scope="row"
                  sx={{ paddingLeft: 5 }}
                >
                  {tag.name}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ width: "50%", paddingRight: 5 }}
                >
                  {tag.count}
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow sx={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6}>
                  {loading && (
                    <Typography
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      Loading...
                    </Typography>
                  )}
                  {error && (
                    <Typography
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      Error
                    </Typography>
                  )}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
          <TableFooter sx={{ backgroundColor: "rgb(94, 132, 194,0.53)" }}>
            <TableCell colSpan={2}>
              <Pagination
                sx={{ display: "flex", justifyContent: "center" }}
                showFirstButton
                showLastButton
                shape="rounded"
                count={Math.ceil(tags.length / tagsPerPage)}
                page={page}
                onChange={(e, p) => setPage(p)}
              />
            </TableCell>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
}
