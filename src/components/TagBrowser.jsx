import React, { useState } from "react";
import TableControl from "./TableControl";
import DataTable from "./DataTable";

export default function TagBrowser() {
  const [sortBy, setSortBy] = useState("popular");
  const [sortOrder, setSortOrder] = useState("desc");
  const [page, setPage] = useState(1);
  const [tagsPerPage, setTagsPerPage] = useState(5);

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
      <DataTable
        page={page}
        tagsPerPage={tagsPerPage}
        setPage={setPage}
        sortBy={sortBy}
        sortOrder={sortOrder}
      />
    </>
  );
}
