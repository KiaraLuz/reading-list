import { useState, useEffect } from "react";

export const useSearch = (initialData, searchQuery) => {
  const [searchResults, setSearchResults] = useState(initialData);
  const [filteredBooksCount, setFilteredBooksCount] = useState(0);

  function search(query) {
    if (query) {
      const filteredData = initialData.filter((book) => {
        return book.title.toLowerCase().includes(query.toLowerCase());
      });
      setSearchResults(filteredData);
      setFilteredBooksCount(filteredData.length);
    }
  }

  useEffect(() => {
    if (searchQuery.trim()) {
      search(searchQuery.trim());
    } else {
      setSearchResults(initialData);
      setFilteredBooksCount(initialData.length);
    }
  }, [searchQuery]);

  return { searchResults, filteredBooksCount };
};
