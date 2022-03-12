import React, { useState, useEffect } from "react";

const Searchbar = ({ searchValueCallback }) => {
  // const searchValue = props;
  //const [searchValue, setSearchValue] = useState("");

  return (
    <div class="form-group">
      <label>Search:</label>
      <input
        class="form-control"
        type="text"
        placeholder="Search Twitter ..."
        onChange={(event) => searchValueCallback(event.target.value)}

        //searchValueCallback={searchValue}
      />
    </div>
  );
};

export default Searchbar;
