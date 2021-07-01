import React from "react";

export const SearchBar = ({ searchValue, setSearchValue }) => {
  return (
    <div className="input-container">
      <input
        id="input-large"
        className="search-bar-input-text"
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search by name, email, city or country"
      />
      <input
        id="input-small"
        className="search-bar-input-text"
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search by name, city or country"
      />
    </div>
  );
};
