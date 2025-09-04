// SearchPage.jsx
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q"); // extract ?q=value
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query) {
      setLoading(true);
      // fake API call (replace with real backend)
      fetch(`/api/search?q=${query}`)
        .then((res) => res.json())
        .then((data) => {
          setResults(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [query]);

  if (!query) return <p>No search query provided.</p>;
  if (loading) return <p>Loading results...</p>;

  return (
    <div>
      <h2>Search Results for "{query}"</h2>
      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <ul>
          {results.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchPage;
