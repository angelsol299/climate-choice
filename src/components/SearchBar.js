export const SearchBar = ({ searchValue, setSearchValue }) => {
  return (
    <div>
      <input
        style={{ width: "250px" }}
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="search name, email, city or country"
      />
    </div>
  );
};
