import { useState } from "react";
import { AddBook, DeleteBook } from "../Icons";

/* eslint-disable react/prop-types */
export const Item = ({ book: item, onClick }) => {
  const { title, synopsis, genre, cover } = item;

  const [isAdded, setIsAdded] = useState(true);
  const handleAddClick = () => setIsAdded(!isAdded);

  return (
    <article
      className="flex flex-col items-center gap-2"
      onClick={() => onClick(item)}
    >
      <img
        src={cover}
        alt={`Libro ${title}`}
        className={`h-64 w-full object-cover rounded-lg ${
          !isAdded && "filter grayscale brightness-50"
        }`}
      />
      <div className="flex justify-between items-center">
        <h2 className="font-semibold">{title}</h2>
        <button
          className="flex justify-center items-center h-8 min-w-8 rounded-md bg-zinc-800"
          onClick={handleAddClick}
        >
          {isAdded ? <AddBook /> : <DeleteBook />}
        </button>
      </div>
      <div className="text-sm">
        <span className="btn-genre">{genre}</span>
        <p className="mt-2 text-zinc-400">{synopsis}</p>
      </div>
    </article>
  );
};
