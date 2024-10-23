import React, { useState, useEffect } from "react";
import { useSearch } from "../contexts/SearchContext";

const Header2 = () => {
  const [inputValue, setInputValue] = useState("");
  const { setSearchQuery, searchRef } = useSearch();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setSearchQuery(value); // Set the search query in context
  };

  useEffect(() => {
    setInputValue(searchRef.current);
    console.log(searchRef.current);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchRef.current]);

  return (
    <header>
      <h1>My App</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search..."
      />
    </header>
  );
};

export default Header2;
