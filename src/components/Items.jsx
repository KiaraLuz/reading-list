/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useSearch } from "../hooks/useSearch";
import data from "./../data/books.json";
import { Item } from "./Item";

export const Items = ({
  searchQuery,
  handleItemClick,
  setTotalBooksCount,
  setReadingListBooksCount,
}) => {
  const { searchResults, isLoading, filteredBooksCount } = useSearch(
    data.library,
    searchQuery
  );

  useEffect(() => {
    setTotalBooksCount(filteredBooksCount);
  }, [filteredBooksCount]);

  return (
    <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 relative">
      {isLoading && <p className="absolute top-5">Cargando...</p>}

      {!isLoading && (
        <>
          {searchResults.length !== 0 ? (
            searchResults.map(({ book }) => (
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
