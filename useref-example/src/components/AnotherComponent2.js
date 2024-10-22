import React from "react";
import { useSearch } from "../contexts/SearchContext";

const AnotherComponent2 = () => {
  const { searchRef, setSearchQuery } = useSearch();

  const handleReset = () => {
    searchRef.current = ""; // Clear the search query
    console.log("Search query reset to:", searchRef.current);
    setSearchQuery("");
  };

  return (
    <div>
      <button onClick={handleReset}>Reset Search</button>
    </div>
  );
};

export default AnotherComponent2;
