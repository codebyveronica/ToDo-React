const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
      <label>Search</label>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
}

export default Search;