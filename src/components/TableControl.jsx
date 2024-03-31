import React from "react";
import { Grid } from "@mui/material";
import SelectField from "./SelectField";
import OrderButton from "./OrderButton";

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
        <SelectField
          name="view"
          variant="standard"
          value={tagsPerPage}
          width={45}
          onChange={(e) => {
            setTagsPerPage(e.target.value);
            setPage(1);
          }}
          options={[5, 10, 16]}
        />
      </Grid>
      <Grid item>
        <SelectField
          name="sort"
          variant="standard"
          value={sortBy}
          width={80}
          onChange={(e) => {
            setSortBy(e.target.value);
            setPage(1);
          }}
          options={["popular", "activity", "name"]}
        />
      </Grid>
      <Grid item sx={{ display: "flex", alignItems: "flex-end", padding: 0 }}>
        <OrderButton
          onClick={(order) => {
            setSortOrder(order);
            setPage(1);
          }}
          sortOrder={sortOrder}
        />
      </Grid>
    </Grid>
  );
}
