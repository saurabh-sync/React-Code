import React, { createContext, useContext, useRef, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const searchRef = useRef("");
  const [, forceUpdate] = useState(); // To trigger re-renders

  const setSearchQuery = (value) => {
    searchRef.current = value; // Update the current ref value
    forceUpdate({}); // Trigger a re-render
  };

  return (
    <SearchContext.Provider value={{ searchRef, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);   
