import { useState } from "react";
import { Header } from "./components/Header";
import { Items } from "./components/Items";
import { Navbar } from "./components/Navbar";
import { List } from "./components/List";
import { Filter } from "./components/Filter";

function App() {
  const [selectList, setSelectList] = useState(false);
  const [searchBook, setSearchBook] = useState("");
  const [filteredCount, setFilteredCount] = useState(0);

  const handleSearch = (book) => {
    setSearchBook(book);
  };

  return (
    <>
      <Header />
      <Filter onSearch={handleSearch} />
      <Navbar
        selectList={selectList}
        setSelectList={setSelectList}
        filteredCount={filteredCount}
      />
      <main className="py-2">
        {!selectList ? (
          <Items searchBook={searchBook} setFilteredCount={setFilteredCount} />
        ) : (
          <List />
        )}
      </main>
    </>
  );
}

export default App;
