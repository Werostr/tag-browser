import React from "react";
import { Grid } from "@mui/material";
import SelectField from "./SelectField";
import OrderButton from "./OrderButton";
import { PropTypes } from "prop-types";

export default function TableControl({
  tagsPerPage,
  sortBy,
  sortOrder,
  setPage,
  setTagsPerPage,
  setSortBy,
  setSortOrder,
  disabled,
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
          fieldName="view"
          variant="standard"
          value={tagsPerPage}
          width={45}
          onChange={(e) => {
            setTagsPerPage(e.target.value);
            setPage(1);
          }}
          options={[5, 10, 16]}
          disabled={disabled}
        />
      </Grid>
      <Grid item>
        <SelectField
          fieldName="sort"
          variant="standard"
          value={sortBy}
          width={80}
          onChange={(e) => {
            setSortBy(e.target.value);
            setPage(1);
          }}
          options={["popular", "activity", "name"]}
          disabled={disabled}
        />
      </Grid>
      <Grid item sx={{ display: "flex", alignItems: "flex-end", padding: 0 }}>
        <OrderButton
          onClick={(order) => {
            setSortOrder(order);
            setPage(1);
          }}
          sortOrder={sortOrder}
          disabled={disabled}
        />
      </Grid>
    </Grid>
  );
}

TableControl.propTypes = {
  tagsPerPage: PropTypes.oneOf([5, 10, 16]).isRequired,
  sortBy: PropTypes.oneOf(["popular", "activity", "name"]).isRequired,
  sortOrder: PropTypes.oneOf(["desc", "asc"]).isRequired,
  setPage: PropTypes.func.isRequired,
  setTagsPerPage: PropTypes.func.isRequired,
  setSortBy: PropTypes.func.isRequired,
  setSortOrder: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

TableControl.defaultProps = {
  tagsPerPage: 5,
  sortBy: "popular",
  sortOrder: "desc",
};
