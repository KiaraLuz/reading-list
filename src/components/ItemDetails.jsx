/* eslint-disable react/prop-types */

import { Return } from "../Icons";

export const ItemDetails = ({ handleItemClick, book: item }) => {
  const { title, synopsis, genre, cover, year, pages, ISBN, author } = item;
  const { name, otherBooks } = author;

  return (
    <section>
      <button
        className="flex justify-center items-center h-8 min-w-8 rounded-md bg-zinc-800"
        onClick={() => handleItemClick(null)}
      >
        <Return className="cursor-pointer" />
      </button>
      <div className="flex gap-8">
        <div>
          <img
            src={cover}
            alt={`Libro ${title}`}
            className="h-96 object-cover rounded-lg"
          />
        </div>

        <div className="flex flex-col justify-start gap-4">
          <h1 className="max-w-3xl text-2xl font-semibold md:text-3xl lg:text-4xl">
            {title}
          </h1>

          <p className="line-clamp-2">{synopsis}</p>
          <p className="btn-genre">{genre}</p>

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

          <div className="flex gap-4">
            <p className="font-semibold">Otros libros: </p>
            {otherBooks.map((otherBook) => (
              <p key={otherBook} className="btn-others">
                {otherBook}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
