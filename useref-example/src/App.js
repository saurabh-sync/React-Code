import React, { useRef, useState } from "react";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import "./App.css";

const App = () => {
  const searchRef = useRef("");
  const [, forceUpdate] = useState();

  const handleSearchChange = (value) => {
    searchRef.current = value; // Update the current ref value
    forceUpdate({});
  };

  return (
    <div className="App">
      <Header onSearchChange={handleSearchChange} />
      <ItemList searchQuery={searchRef.current} />
    </div>
  );
};

export default App;
