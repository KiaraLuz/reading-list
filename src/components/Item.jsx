import { useState } from "react";
import { AddBook, DeleteBook } from "../Icons";

// eslint-disable-next-line react/prop-types
export const Item = ({ title, genre, cover, synopsis }) => {
  const [add, setAdd] = useState(true);

  return (
    <article className="flex flex-col gap-2">
      <img src={cover} alt={`Libro ${title}`} className="h-64 object-cover" />
      <div className="flex justify-between">
        <h2>{title}</h2>
        <button
          className="flex justify-center items-center h-8 w-8 rounded-md bg-zinc-800"
          onClick={() => setAdd(!add)}
        >
          {add ? <AddBook /> : <DeleteBook />}
        </button>
      </div>
      <div className="text-sm">
        <p className="text-zinc-500">{synopsis}</p>
        <span className="bg-purple-700 px-2 rounded-full">{genre}</span>
      </div>
    </article>
  );
};
