function SearchBar({ search, setSearch }) {

    return (
  
      <input
        type="text"
        placeholder="Search articles..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="w-full p-3 rounded-lg border mb-6"
      />
  
    );
  }
  
  export default SearchBar;