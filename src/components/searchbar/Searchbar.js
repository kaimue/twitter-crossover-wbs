import React, { useState, useEffect } from "react";

const Searchbar = ({ searchValueCallback }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div class="form-group">
      <label>Search:</label>
      <input
        class="form-control"
        type="text"
        placeholder="Search Twitter ..."
        onChange={(event) => setSearchValue(event.target.value)}
        searchValueCallback={searchValue}
      />
    </div>
  );
};

export default Searchbar;
