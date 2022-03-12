import React, { useState, useEffect } from "react";

const Searchbar = () => {
  return (
    <div class="form-group">
      <label>Search:</label>
      <input
        class="form-control"
        type="text"
        placeholder="Search Twitter ..."
      />
    </div>
  );
};

export default Searchbar;
