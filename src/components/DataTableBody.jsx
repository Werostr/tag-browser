import DataTableRow from "./DataTableRow";
import React from "react";
import { Typography, TableBody } from "@mui/material";
import { PropTypes } from "prop-types";

export default function DataTableBody({
  backgroundColor,
  page,
  tagsPerPage,
  tags,
  loading,
  error,
}) {
  const emptyRows =
    page > 0 ? Math.max(0, page * tagsPerPage - tags.length) : 0;

  return (
    <TableBody sx={{ backgroundColor: backgroundColor }}>
      {!loading &&
        !error &&
        (tagsPerPage > 0 && tags
          ? tags.slice(
              (page - 1) * tagsPerPage,
              (page - 1) * tagsPerPage + tagsPerPage
            )
          : tags
        ).map((tag) => (
          <DataTableRow
            key={tag.name}
            cells={[tag.name, tag.count]}
            hover="true"
          />
        ))}
      {tags.length > tagsPerPage && emptyRows > 0 && (
        <DataTableRow colSpan={2} height={53 * emptyRows} />
      )}
      {loading && (
        <DataTableRow
          colSpan={2}
          height={53 * 5}
          component={
            <Typography sx={{ display: "flex", justifyContent: "center" }}>
              Loading...
            </Typography>
          }
        />
      )}
      {error && (
        <DataTableRow
          colSpan={2}
          height={53 * 5}
          component={
            <Typography sx={{ display: "flex", justifyContent: "center" }}>
              Error
            </Typography>
          }
        />
      )}
    </TableBody>
  );
}

DataTableBody.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  tagsPerPage: PropTypes.oneOf([5, 10, 16]).isRequired,
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

DataTableBody.defaultProps = {
  backgroundColor: "rgb(94, 132, 194,0.7)",
  page: 1,
  tagsPerPage: 5,
  tags: [],
  loading: true,
  error: false,
};
