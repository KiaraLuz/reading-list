import { useState, useEffect } from "react";
import { AddBook, DeleteBook } from "../Icons";
import {
  addBookToLocalStorage,
  removeBookFromLocalStorage,
  bookExistsInLocalStorage,
} from "../helper/localStorageHelper";

/* eslint-disable react/prop-types */
export const Item = ({ book: item, onClick }) => {
  const { title, synopsis, genre, cover, ISBN } = item;

  const [isInLocalStorage, setIsInLocalStorage] = useState(
    bookExistsInLocalStorage(ISBN)
  );

  const handleAddRemoveBook = () => {
    if (isInLocalStorage) {
      removeBookFromLocalStorage(ISBN);
    } else {
      addBookToLocalStorage(item);
    }
    setIsInLocalStorage(!isInLocalStorage);
  };

  useEffect(() => {
    setIsInLocalStorage(bookExistsInLocalStorage(ISBN));
  }, [ISBN]);

  return (
    <article className="flex flex-col items-center gap-2">
      <img
        src={cover}
        alt={`Libro ${title}`}
        className={`h-64 w-full object-cover rounded-lg ${
          isInLocalStorage && "filter grayscale brightness-50"
        }`}
      />

      <div className="flex justify-between w-full">
        <h2
          className="font-semibold cursor-pointer"
          onClick={() => onClick(item)}
        >
          {title}
        </h2>
        <button
          className="flex justify-center items-center h-8 min-w-8 rounded-md bg-zinc-800"
          onClick={handleAddRemoveBook}
        >
          {isInLocalStorage ? <DeleteBook /> : <AddBook />}
        </button>
      </div>

      <div className="text-sm">
        <span className="btn-genre">{genre}</span>
        <p className="mt-2 text-zinc-400 line-clamp-3">{synopsis}</p>
      </div>
    </article>
  );
};
