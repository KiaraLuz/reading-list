import { useState } from "react";
import { Header } from "./components/Header";
import { Items } from "./components/Items";
import { Navbar } from "./components/Navbar";
import { List } from "./components/List";
import { Filter } from "./components/Filter";
import { ItemDetails } from "./components/ItemDetails";
import { getBooksFromLocalStorage } from "./helper/localStorageHelper";

function App() {
  const [showList, setShowList] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  const [totalBooksCount, setTotalBooksCount] = useState(0);
  const [readingListBooksCount, setReadingListBooksCount] = useState(
    getBooksFromLocalStorage().length
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleItemClick = (book) => {
    setSelectedBook(book);
  };

  return (
    <>
      <Header />
      <Filter handleSearchChange={handleSearchChange} />
      <Navbar
        showList={showList}
        setShowList={setShowList}
        totalBooksCount={totalBooksCount}
        readingListBooksCount={readingListBooksCount}
      />
      <main className="py-2">
        {!showList ? (
          !selectedBook ? (
            <Items
              searchQuery={searchQuery}
              handleItemClick={handleItemClick}
              setTotalBooksCount={setTotalBooksCount}
              setReadingListBooksCount={setReadingListBooksCount}
            />
          ) : (
            <ItemDetails
              handleItemClick={handleItemClick}
              book={selectedBook}
              setReadingListBooksCount={setReadingListBooksCount}
            />
          )
        ) : (
          <List
            searchQuery={searchQuery}
            handleItemClick={handleItemClick}
            setReadingListBooksCount={setReadingListBooksCount}
          />
        )}
      </main>
    </>
  );
}

export default App;
