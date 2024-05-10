/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import data from "./../data/books.json";
import { Item } from "./Item";

export const Items = ({ searchBook, setFilteredCount }) => {
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const filteredBooks = data.library.filter(({ book }) =>
          book.title.toLowerCase().includes(searchBook.toLowerCase())
        );
        setFilteredBooks(filteredBooks);
        setFilteredCount(filteredBooks.length);
        setLoading(false);
        setError(null);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };
    fetchBooks();
  }, [searchBook, setFilteredCount]);

  return (
    <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 relative">
      {loading && <p className="absolute top-5">Cargando...</p>}

      {error && (
        <p className="absolute top-5 text-red-500">Ha ocurrido un error</p>
      )}

      {!loading && !error && (
        <>
          {filteredBooks.length !== 0 ? (
            filteredBooks.map(({ book }) => (
              <Item
                key={book.ISBN}
                title={book.title}
                genre={book.genre}
                cover={book.cover}
                synopsis={book.synopsis}
              />
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
