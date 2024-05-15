import { useState, useEffect } from "react";

export const useSearch = (initialData, searchName) => {
  const [searchResults, setSearchResults] = useState(initialData);
  const [filteredBooksCount, setFilteredBooksCount] = useState(0);

  function searchByName(query) {
    if (query) {
      const filteredData = initialData.filter((book) => {
        return book.title.toLowerCase().includes(query.toLowerCase());
      });
      setSearchResults(filteredData);
      setFilteredBooksCount(filteredData.length);
    }
  }

  useEffect(() => {
    if (searchName.trim()) {
      searchByName(searchName.trim());
    } else {
      setSearchResults(initialData);
      setFilteredBooksCount(initialData.length);
    }
  }, [searchName]);

  return { searchResults, filteredBooksCount };
};
