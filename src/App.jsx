import { useState } from "react";
import Navbear from "./components/Navbear";
import Footer from "./components/Footer";
import WelcomeAlert from "./components/WelcomeAlert";
import AllTheBooks from "./components/AllTheBooks";
import SingleBook from "./components/SingleBook";

function App() {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <>
      <Navbear></Navbear>
      <WelcomeAlert></WelcomeAlert>
      {selectedBook && <SingleBook book={selectedBook} />}
      <AllTheBooks onSelectBook={setSelectedBook}></AllTheBooks>

      <Footer></Footer>
    </>
  );
}

export default App;
