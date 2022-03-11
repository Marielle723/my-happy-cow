import React from "react";

function SearchScreen() {
  return (
    <div className="searchScreen-wrapper">
      <button>X</button>
      <h2>Search HappyCow</h2>
      <nav>
        <ul>
          <li>All</li>
          <li>Cities</li>
          <li>Businesses</li>
          <li>Members</li>
          <li>Famous</li>
          <li>Recipes</li>
          <li>Forum</li>
        </ul>
      </nav>
      <input type="text" placeholder="Search all"></input>
      <button>Search</button>
    </div>
  );
}

export default SearchScreen;
