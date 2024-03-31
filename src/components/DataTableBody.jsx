import DataTableRow from "./DataTableRow";
import React from "react";
import { Typography, TableBody } from "@mui/material";

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
        (tagsPerPage > 0
          ? tags.slice(
              (page - 1) * tagsPerPage,
              (page - 1) * tagsPerPage + tagsPerPage
            )
          : tags
        ).map((tag) => (
          <DataTableRow key={tag.name} cells={[tag.name, tag.count]} />
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
