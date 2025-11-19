import { useState } from "react";
import Navbear from "./components/Navbear";
import Footer from "./components/Footer";
import WelcomeAlert from "./components/WelcomeAlert";
import AllTheBooks from "./components/AllTheBooks";
import SingleBook from "./components/SingleBook";
import Searchbar from "./components/Searchbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Books from "./assets/scifi.json";

function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Navbear></Navbear>
      <Searchbar onSearchChange={setSearchTerm}></Searchbar>
      <WelcomeAlert></WelcomeAlert>
      {selectedBook && <SingleBook book={selectedBook} />}
      <AllTheBooks
        onSelectBook={setSelectedBook}
        books={Books}
        searchTerm={searchTerm}></AllTheBooks>

      <Footer></Footer>
    </>
  );
}

export default App;
