export const SearchBar = ({
  searchValue,
  setSearchValue,
  testClick,
  clearArray,
}) => {
  return (
    <div>
      <input type="text" value={searchValue} onChange={testClick} />
      <button className="ml5" onClick={testClick}>
        Search
      </button>
      <button className="ml5" onClick={clearArray}>
        Clear
      </button>
    </div>
  );
};
