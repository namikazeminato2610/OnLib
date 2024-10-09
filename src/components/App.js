import React from 'react';
import BookList from './BookList';
import Header from './Header';
import AddBook from './AddBook';
import org from "../pics/verlog.png";
import BookInfo from './BookInfo';

class App extends React.Component {
  // let bookArr = [["ABC0", "DEF0", "XYZ0"], ["ABC1", "DEF1", "XYZ1"],
  // ["ABC2", "DEF2", "XYZ2"], ["ABC3", "DEF3", "XYZ3"]];

  state = {
    bookList: [["ABC0", "DEF0", "XYZ0"], ["ABC1", "DEF1", "XYZ1"],
     ["ABC2", "DEF2", "XYZ2"], ["ABC3", "DEF3", "XYZ3"]],
    showBookList: true,
    showAddBook: false,
    showBookInfo: false,
    selectedIndex: -1
  };

  def = () => {
    this.setState({showBookList: true, showAddBook: false, showBookInfo: false, bookList: this.state.bookList});
  }
  
  adder = () => {
    this.setState({showBookList: false, showAddBook: true, showBookInfo: false, bookList: this.state.bookList});
  }

  showInfo = (index) => {
    this.setState({showBookList: false, showAddBook: false, showBookInfo: true, bookList: this.state.bookList, selectedIndex: index});
  }

  addNewBookHandler = (newBook) => {
    let bookArr = this.state.bookList;
    bookArr.push(newBook);
    this.setState({showBookList: true, bookList: this.state.bookList});
  }

  render() {
    return (
      <>
        <Header onLogoClick={this.def} orgaPic={org} orgaName={"Pho Thong Nang Khieu"}></Header>
        {this.state.showBookList && <BookList books={this.state.bookList} onABClick={this.adder} showInfo={(index) => {this.showInfo(index)}} />}
        {this.state.showAddBook && <AddBook books={this.state.bookList} addNewBookHandler={this.addNewBookHandler} />}
        {this.state.showBookInfo && <BookInfo books={this.state.bookList} ind={this.state.selectedIndex} />}
      </>
    );
  }
}

export default App;
