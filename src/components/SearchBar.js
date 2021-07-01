import React from "react";

export const SearchBar = ({ searchValue, setSearchValue }) => {
  return (
    <div>
      <input
        className="search-bar-input-text"
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="search by name, email, city or country"
      />
    </div>
  );
};
