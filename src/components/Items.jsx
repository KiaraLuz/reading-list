/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import data from "./../data/books.json";
import { Item } from "./Item";

export const Items = ({
  searchQuery,
  setFilteredBooksCount,
  handleItemClick,
}) => {
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFilteredBooks = async () => {
      try {
        setIsLoading(true);
        const filteredBooks = data.library.filter(({ book }) =>
          book.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredBooks(filteredBooks);
        setFilteredBooksCount(filteredBooks.length);
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
            filteredBooks.map(({ book }) => (
              <Item key={book.ISBN} book={book} onClick={handleItemClick} />
            ))
          ) : (
            <p className="absolute top-5">
              No se han encontrado coincidencias, prueba modificar los filtros
            </p>
          )}
        </>
      )}
    </section>
  );
};
