import { useState, useEffect } from "react";

export const useSearch = (initialData, searchName, searchGenre) => {
  const [searchResults, setSearchResults] = useState(initialData);
  const [filteredBooksCount, setFilteredBooksCount] = useState(
    initialData.length
  );

  useEffect(() => {
    let filteredData = initialData;

    if (searchName.trim()) {
      filteredData = filteredData.filter((book) =>
        book.title.toLowerCase().includes(searchName.trim().toLowerCase())
      );
    }

    if (searchGenre) {
      filteredData = filteredData.filter((book) =>
        book.genre.toLowerCase().includes(searchGenre.trim().toLowerCase())
      );
    }

    setSearchResults(filteredData);
    setFilteredBooksCount(filteredData.length);
  }, [initialData, searchName, searchGenre]);

  return { searchResults, filteredBooksCount };
};
