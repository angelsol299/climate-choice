import React from "react";
import { SearchBar } from "./SearchBar";

export const Header = ({
  searchValue,
  setSearchValue,
  testClick,
  clearArray,
}) => {
  return (
    <main className="header">
      <a class="logo" href="https://theclimatechoice.com/en">
        The Climate Choice
      </a>
      <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        testClick={testClick}
        clearArray={clearArray}
      />
    </main>
  );
};
