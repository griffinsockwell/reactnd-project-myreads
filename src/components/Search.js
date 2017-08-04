import React from 'react';
import styled from 'styled-components';
import * as BooksAPI from '../api/BooksAPI';
import SearchBar from './SearchBar';
import BookShelf from './BookShelf';

const StyledSearch = styled.div`
  flex: 1;
  overflow: scroll;
`;

class Search extends React.Component {
  state = {
    searching: false,
    books: []
  };

  searchForBooks = async query => {
    try {
      this.setState({ searching: true });
      const res = await BooksAPI.search(query);
      const { books } = await res.json();
      this.setState({ books });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ searching: false });
    }
  };

  render() {
    const { searching } = this.state;
    const { movingBook, updateBook } = this.props;
    const booksFound = this.state.books;
    const booksSelected = this.props.books;

    let oldBooks = [];
    booksSelected.forEach(book => {
      booksFound.forEach(bk => bk.id === book.id && oldBooks.push(book));
    });

    let newBooks = [];
    booksFound.forEach(book => {
      let books = [];
      oldBooks.forEach(bk => bk.id !== book.id && books.push(book));
      if (books.length === oldBooks.length) {
        newBooks.push(book);
      }
    });

    const allBooks = [...oldBooks, ...newBooks];

    return (
      <StyledSearch>
        <SearchBar searchForBooks={this.searchForBooks} />

        <BookShelf
          key="search"
          title="Search Results"
          books={allBooks}
          searching={searching}
          movingBook={movingBook}
          updateBook={updateBook}
        />
      </StyledSearch>
    );
  }
}

export default Search;
