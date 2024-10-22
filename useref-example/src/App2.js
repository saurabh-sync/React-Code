import React from "react";
import { SearchProvider } from "./contexts/SearchContext";
import Header2 from "./components/Header2";
import ItemList2 from "./components/ItemList2";
import AnotherComponent2 from "./components/AnotherComponent2";
import "./App.css";

const App = () => {
  return (
    <SearchProvider>
      <div className="App">
        <Header2 />
        <AnotherComponent2 />
        <ItemList2 />
      </div>
    </SearchProvider>
  );
};

export default App;
