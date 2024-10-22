import React from "react";
import { useSearch } from "../contexts/SearchContext";

const ItemList2 = () => {
  const { searchRef } = useSearch();
  const items = ["Apple", "Banana", "Cherry", "Date", "Fig", "Grape"];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchRef.current.toLowerCase())
  );

  return (
    <ul>
      {filteredItems.length > 0 ? (
        filteredItems.map((item, index) => <li key={index}>{item}</li>)
      ) : (
        <li>No items found</li>
      )}
    </ul>
  );
};

export default ItemList2;
