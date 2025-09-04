// Search.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (name.trim() !== "") {
      // navigate with query param
      navigate(`/search?q=${encodeURIComponent(name)}`);
    }
  };

  return (
    <>
      <input
        type="text"
        value={name}
        placeholder="search your friend"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </>
  );
};

export default Search;
