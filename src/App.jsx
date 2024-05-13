import { useState } from "react";
import { Header } from "./components/Header.jsx";
import { Items } from "./components/Items.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { List } from "./components/List.jsx";
import { Filter } from "./components/Filter.jsx";
import { ItemDetails } from "./components/ItemDetails.jsx";
import { getBooksFromLocalStorage } from "./helper/localStorageHelper.js";
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
