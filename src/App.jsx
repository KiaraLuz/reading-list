import { useState } from "react";
import { Header } from "./components/Header";
import { Items } from "./components/Items";
import { Navbar } from "./components/Navbar";
import { List } from "./components/List";
import { Filter } from "./components/Filter";
import { ItemDetails } from "./components/ItemDetails";

function App() {
  const [showList, setShowList] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooksCount, setFilteredBooksCount] = useState(0);
  const [selectedBook, setSelectedBook] = useState(null);

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
        filteredBooksCount={filteredBooksCount}
      />
      <main className="py-2">
        {!showList ? (
          !selectedBook ? (
            <Items
              searchQuery={searchQuery}
              setFilteredBooksCount={setFilteredBooksCount}
              handleItemClick={handleItemClick}
            />
          ) : (
            <ItemDetails
              handleItemClick={handleItemClick}
              book={selectedBook}
            />
          )
        ) : (
          <List />
        )}
      </main>
    </>
  );
}

export default App;
