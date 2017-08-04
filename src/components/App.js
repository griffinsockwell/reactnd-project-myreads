import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import * as BooksAPI from '../api/BooksAPI';
import AppHeader from './AppHeader';
import Home from './Home';
import Search from './Search';

const StyledApp = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

class App extends React.Component {
  state = {
    loading: true,
    books: [],
    movingBook: ''
  };

  async componentDidMount() {
    try {
      const res = await BooksAPI.getAll();
      const { books } = await res.json();
      this.setState({ books });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  }

  updateBook = async bookInfo => {
    try {
      const { book, shelf } = bookInfo;
      this.setState({ movingBook: book.id });
      await BooksAPI.update(book, shelf);
      const newBook = { ...book, shelf };
      this.setState(state => {
        const filteredBooks = state.books.filter(bk => bk.id !== newBook.id);
        const books = [...filteredBooks, newBook];
        return { books };
      });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ movingBook: '' });
    }
  };

  renderHome = () => {
    const { loading, books, movingBook } = this.state;
    return (
      <Home
        loading={loading}
        books={books}
        movingBook={movingBook}
        updateBook={this.updateBook}
      />
    );
  };

  renderSearch = () => {
    const { books, movingBook } = this.state;
    return (
      <Search
        books={books}
        movingBook={movingBook}
        updateBook={this.updateBook}
      />
    );
  };

  render() {
    return (
      <StyledApp>
        <AppHeader />
        <Route exact path="/" render={this.renderHome} />
        <Route path="/search" render={this.renderSearch} />
      </StyledApp>
    );
  }
}

export default App;
