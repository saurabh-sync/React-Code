import React, { useState } from "react";

const Header = ({ onSearchChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onSearchChange(value); // Pass the value up to the App component
  };

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

export default Header;
    