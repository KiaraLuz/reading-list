import { useState, useEffect } from "react";

export const useSearch = (initialData, searchQuery) => {
  const [searchResults, setSearchResults] = useState(initialData);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredBooksCount, setFilteredBooksCount] = useState(0);

  useEffect(() => {
    const search = async (query) => {
      try {
        setIsLoading(true);
        if (query) {
          const filteredData = initialData.filter((book) =>
            book.title.toLowerCase().includes(query.toLowerCase())
          );
          setSearchResults(filteredData);
          setFilteredBooksCount(filteredData.length);
        } else {
          setSearchResults(initialData);
          setFilteredBooksCount(initialData.length);
        }
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    search(searchQuery);
  }, [searchQuery, initialData]);

  return { searchResults, isLoading, filteredBooksCount };
};
