import React from "react";

const ItemList = ({ searchQuery }) => {
  const items = ["Apple", "Banana", "Cherry", "Date", "Fig", "Grape"];
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ul>
      {filteredItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ItemList;
