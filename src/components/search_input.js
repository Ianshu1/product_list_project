import React from 'react';

function Search({ setSearchQuery }) {
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="Search">
      <div className="search-container">
        <h1>Product list</h1>
        <input
          type="text"
          className="search-input"
          placeholder="Product name"
          onChange={handleSearch}
        />
        <button>Search</button>
      </div>
    </div>
  );
}

export default Search;
