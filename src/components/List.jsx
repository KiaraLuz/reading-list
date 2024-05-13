/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Item } from "./Item.jsx";
import { getBooksFromLocalStorage } from "./../helper/localStorageHelper.js";
import { useSearch } from "../hooks/useSearch.js";

export const List = ({
  searchQuery,
  handleItemClick,
  setReadingListBooksCount,
}) => {
  const { searchResults, isLoading, filteredBooksCount } = useSearch(
    getBooksFromLocalStorage(),
    searchQuery
  );

  useEffect(() => {
    setReadingListBooksCount(filteredBooksCount);
  }, [filteredBooksCount]);

  return (
    <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 relative">
      {isLoading && <p className="absolute top-5">Cargando...</p>}

      {!isLoading && (
        <>
          {searchResults.length !== 0 ? (
            searchResults.map((book) => (
              <Item
                key={book.ISBN}
                book={book}
                onClick={handleItemClick}
                setReadingListBookCount={setReadingListBooksCount}
              />
            ))
          ) : (
            <p className="absolute top-5">No se han encontrado coincidencias</p>
          )}
        </>
      )}
    </section>
  );
};
