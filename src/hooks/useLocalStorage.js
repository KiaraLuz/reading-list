import { useState, useEffect } from "react";
import {
  addBookToLocalStorage,
  removeBookFromLocalStorage,
  bookExistsInLocalStorage,
  getBooksFromLocalStorage,
} from "../helper/localStorageHelper";

export const useLocalStorage = (book, setReadingListBooksCount) => {
  const { ISBN } = book;
  const [isInLocalStorage, setIsInLocalStorage] = useState(
    bookExistsInLocalStorage(ISBN)
  );

  const handleAddRemoveBook = () => {
    const count = getBooksFromLocalStorage().length;
    if (isInLocalStorage) {
      removeBookFromLocalStorage(ISBN);
      setReadingListBooksCount(count - 1);
    } else {
      addBookToLocalStorage(book);
      setReadingListBooksCount(count + 1);
    }
    setIsInLocalStorage(!isInLocalStorage);
  };

  useEffect(() => {
    setIsInLocalStorage(bookExistsInLocalStorage(ISBN));
  }, [ISBN]);

  return { isInLocalStorage, handleAddRemoveBook };
};
