export const SearchBar = ({
  searchValue,
  setSearchValue,
  testClick,
  clearArray,
}) => {
  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button style={{ marginLeft: "5px" }} onClick={testClick}>
        Search
      </button>
      <button style={{ marginLeft: "5px" }} onClick={clearArray}>
        Clear
      </button>
    </div>
  );
};
