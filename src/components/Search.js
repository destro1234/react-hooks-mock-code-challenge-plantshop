import React, { useState} from "react";

function Search({onSearch}) {

  const [search, setSearch] = useState(" ")

  function handleSearch(e) {
    setSearch(e.target.value)
    onSearch(search)

  }


  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );
}

export default Search;
