import React, { useState, useEffect } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
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

export default function TableControl({
  tagsPerPage,
  sortBy,
  sortOrder,
  setPage,
  setTagsPerPage,
  setSortBy,
  setSortOrder,
}) {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        padding: 2,
      }}
      spacing={2}
    >
      <Grid item>
        <InputLabel id="view" sx={{ fontSize: 14 }}>
          view
        </InputLabel>
        <Select
          labelId="view"
          variant="standard"
          value={tagsPerPage}
          onChange={(e) => {
            setTagsPerPage(e.target.value);
            setPage(1);
          }}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={12}>20</MenuItem>
        </Select>
      </Grid>
      <Grid item>
        <InputLabel id="sortBy" sx={{ fontSize: 14 }}>
          sort
        </InputLabel>
        <Select
          labelId="sortBy"
          variant="standard"
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
            setPage(1);
          }}
        >
          <MenuItem value={"popular"}>popular</MenuItem>
          <MenuItem value={"activity"}>activity</MenuItem>
          <MenuItem value={"name"}>name</MenuItem>
        </Select>
      </Grid>
      <Grid item sx={{ display: "flex", alignItems: "flex-end", padding: 0 }}>
        <ButtonGroup
          orientation="vertical"
          sx={{
            border: "1px solid rgb(94, 132, 194, 0.3)",
            paddingX: 0.5,
          }}
        >
          <IconButton
            sx={{ padding: 0 }}
            onClick={() => {
              setSortOrder("asc");
              setPage(1);
            }}
          >
            <ArrowDropUpIcon
              color={sortOrder === "desc" ? "disabled" : ""}
              fontSize="small"
            />
          </IconButton>
          <IconButton
            sx={{ padding: 0 }}
            onClick={() => {
              setSortOrder("desc");
              setPage(1);
            }}
          >
            <ArrowDropDownIcon
              color={sortOrder === "asc" ? "disabled" : ""}
              fontSize="small"
            />
          </IconButton>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}
