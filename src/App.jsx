import { useState } from "react";
import { Header } from "./components/Header";
import { Items } from "./components/Items";
import { Navbar } from "./components/Navbar";
import { List } from "./components/List";

function App() {
  const [selectList, setSelectList] = useState(false);

  return (
    <>
      <Header />
      <Navbar selectList={selectList} setSelectList={setSelectList} />
      <main className="py-2">{!selectList ? <Items /> : <List />}</main>
    </>
  );
}

export default App;
