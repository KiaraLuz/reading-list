/* eslint-disable react/prop-types */
import { AddBook, DeleteBook, Return } from "../Icons";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const ItemDetails = ({
  handleItemClick,
  book: item,
  setReadingListBooksCount,
}) => {
  const { title, synopsis, genre, cover, year, pages, ISBN, author } = item;
  const { name, otherBooks } = author;
  const { isInLocalStorage, handleAddRemoveBook } = useLocalStorage(
    item,
    setReadingListBooksCount
  );

  return (
    <section className="flex gap-8">
      <div className="relative">
        <button
          className="absolute flex justify-center items-center h-8 min-w-8 rounded-md bg-zinc-800 top-1 left-1"
          aria-label="Retornar"
          onClick={() => handleItemClick(null)}
        >
          <Return className="cursor-pointer" />
        </button>
        <img
          src={cover}
          alt={`Libro ${title}`}
          className={`h-96 min-w-72 object-cover rounded-lg ${
            isInLocalStorage && "filter grayscale brightness-50"
          }`}
        />
      </div>

      <div className="flex flex-col justify-start gap-4">
        <h1 className="max-w-3xl text-2xl font-semibold md:text-3xl lg:text-4xl">
          {title}
        </h1>

        <p>{synopsis}</p>
        <p className="btn-genre">{genre}</p>
        <button
          className="flex justify-center items-center h-8 max-w-8 rounded-md bg-zinc-800"
          aria-label="Guardar"
          onClick={handleAddRemoveBook}
        >
          {isInLocalStorage ? <DeleteBook /> : <AddBook />}
        </button>

        <div className="flex flex-row gap-4">
          <div>
            <p className="font-semibold">Publicado: </p>
            <p>{year}</p>
          </div>
          <div>
            <p className="font-semibold">Páginas: </p>
            <p>{pages}</p>
          </div>
          <div>
            <p className="font-semibold">ISBN: </p>
            <p>{ISBN}</p>
          </div>
        </div>

        <div className="flex gap-4">
          <p className="font-semibold">Autor:</p>
          <p>{name}</p>
        </div>

        {otherBooks && otherBooks.length > 0 ? (
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Otros libros: </p>
            {otherBooks.map((otherBook) => (
              <p key={otherBook} className="btn-others">
                {otherBook}
              </p>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};
