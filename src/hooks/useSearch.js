import { useState, useEffect } from "react";

export const useSearch = (initialData, searchName, searchGenre) => {
  const [searchResults, setSearchResults] = useState(initialData);
  const [filteredBooksCount, setFilteredBooksCount] = useState(
    initialData.length
  );

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
      setSearchResults(searchResults);
      setFilteredBooksCount(searchResults.length);
    }
  }, [searchName]);

  function searchByGenre(query) {
    if (query) {
      const filteredData = initialData.filter((book) => {
        return book.genre.toLowerCase().includes(query.toLowerCase());
      });
      setSearchResults(filteredData);
      setFilteredBooksCount(filteredData.length);
    }
  }

  useEffect(() => {
    if (searchGenre) {
      searchByGenre(searchGenre);
    } else {
      setSearchResults(searchResults);
      setFilteredBooksCount(searchResults.length);
    }
  }, [searchGenre]);

  return { searchResults, filteredBooksCount };
};
