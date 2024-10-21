import React from "react";
import useFetch from "./hooks/useFetch";

function FetchData() {
  const { isLoading, serverError, apiData } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  if (isLoading && !apiData) {
    return <span>Loading.....</span>;
  }

  if (serverError) {
    return <span>Error in fetching data ...</span>;
  }

  return (
    <div>
      <h1>API Data</h1>
      <span>{JSON.stringify(apiData)}</span>{" "}
    </div>
  );
}

export default FetchData;
