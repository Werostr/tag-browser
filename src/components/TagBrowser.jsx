import React, { useState, useEffect, useMemo } from "react";
import TableControl from "./TableControl";
import DataTable from "./DataTable";
import axios from "axios";

export default function TagBrowser() {
  const [sortBy, setSortBy] = useState("popular");
  const [sortOrder, setSortOrder] = useState("desc");
  const [page, setPage] = useState(1);
  const [tagsPerPage, setTagsPerPage] = useState(5);
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

  const disabled = useMemo(() => {
    return error || loading;
  }, [error, loading]);

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
        disabled={disabled}
      />
      <DataTable
        tags={tags}
        loading={loading}
        error={error}
        page={page}
        tagsPerPage={tagsPerPage}
        setPage={setPage}
      />
    </>
  );
}
