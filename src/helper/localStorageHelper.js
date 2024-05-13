export const saveBooksToLocalStorage = (books) => {
  localStorage.setItem("library", JSON.stringify(books));
};

export const getBooksFromLocalStorage = () => {
  const books = localStorage.getItem("library");
  return books ? JSON.parse(books) : [];
};

export const addBookToLocalStorage = (book) => {
  const books = getBooksFromLocalStorage();
  if (!bookExistsInLocalStorage(book.ISBN)) {
    const updatedBooks = [...books, book];
    saveBooksToLocalStorage(updatedBooks);
  }
};

export const removeBookFromLocalStorage = (bookISBN) => {
  const books = getBooksFromLocalStorage();
  const updatedBooks = books.filter((book) => book.ISBN !== bookISBN);
  saveBooksToLocalStorage(updatedBooks);
};

export const bookExistsInLocalStorage = (bookISBN) => {
  const books = getBooksFromLocalStorage();
  return books.some((book) => book.ISBN === bookISBN);
};
