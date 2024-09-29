import React from 'react';
import '../styles/index.css';
import BookList from './BookList';
import Header from './Header';
import AddBook from './AddBook';
import org from "../pics/verlog.png";

function App() {
  let bookArr = [["ABC0", "DEF0", "XYZ0"], ["ABC1", "DEF1", "XYZ1"],
  ["ABC2", "DEF2", "XYZ2"], ["ABC3", "DEF3", "XYZ3"]];

  const [showBookList, setShowBookList] = React.useState(true);
  const [showAddBook, setShowAddBook] = React.useState(false);

  function def() {
    setShowBookList(true);
    setShowAddBook(false);
  }
  function adder() {
    setShowBookList(false);
    setShowAddBook(true);
  }

  return (
    <>
      <Header onLogoClick={def} orgaPic={org} orgaName={"CLBKNS"}></Header>
      {showBookList && <BookList books={bookArr} onABClick={adder} />}
      {showAddBook && <AddBook books={bookArr} />}
    </>
  );
}

export default App;
