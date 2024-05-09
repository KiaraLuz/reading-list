import data from "./../data/books.json";
import { Item } from "./Item";

export const Items = () => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {data.map(({ book }) => (
        <Item
          key={book.ISBN}
          title={book.title}
          genre={book.genre}
          cover={book.cover}
          synopsis={book.synopsis}
        />
      ))}
    </div>
  );
};
