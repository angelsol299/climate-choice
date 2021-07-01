export const SearchBar = ({ searchValue, setSearchValue }) => {
  return (
    <div>
      <input
        className="search-bar-input-text"
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="search name, email, city or country"
      />
    </div>
  );
};
