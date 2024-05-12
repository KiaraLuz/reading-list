/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Item } from "./Item";
import { getBooksFromLocalStorage } from "./../helper/localStorageHelper";

export const List = ({
  searchQuery,
  setFilteredBooksCount,
  handleItemClick,
  setFilteredLocalStorageBooksCount,
}) => {
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFilteredBooks = async () => {
      try {
        setIsLoading(true);
        const localStorageBooks = getBooksFromLocalStorage();
        const filteredBooks = localStorageBooks.filter((book) =>
          book.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredBooks(filteredBooks);
        setFilteredLocalStorageBooksCount(filteredBooks.length);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchFilteredBooks();
  }, [searchQuery, setFilteredBooksCount]);

  return (
    <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 relative">
      {isLoading && <p className="absolute top-5">Cargando...</p>}

      {!isLoading && (
        <>
          {filteredBooks.length !== 0 ? (
            filteredBooks.map((book) => (
              <Item key={book.ISBN} book={book} onClick={handleItemClick} />
            ))
          ) : (
            <p className="absolute top-5">No se han encontrado coincidencias</p>
          )}
        </>
      )}
    </section>
  );
};
