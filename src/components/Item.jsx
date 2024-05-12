import { AddBook, DeleteBook } from "../Icons";
import { useLocalStorage } from "../hooks/useLocalStorage";

/* eslint-disable react/prop-types */
export const Item = ({ book: item, onClick, setReadingListBookCount }) => {
  const { title, synopsis, genre, cover } = item;
  const { isInLocalStorage, handleAddRemoveBook } = useLocalStorage(
    item,
    setReadingListBookCount
  );

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
          aria-label="Guardar"
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
