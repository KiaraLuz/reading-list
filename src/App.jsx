import { useState } from "react";
import { Header } from "./components/Header";
import { Items } from "./components/Items";
import { Navbar } from "./components/Navbar";
import { List } from "./components/List";

function App() {
  const [activeTab, setActiveTab] = useState("books");

  return (
    <>
      <Header />
      <Navbar setActiveTab={setActiveTab} />
      {activeTab === "books" && <Items />}
      {activeTab === "list" && <List />}
    </>
  );
}

export default App;
