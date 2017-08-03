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
    books: []
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

  renderHome = () => {
    const { loading, books } = this.state;
    return <Home loading={loading} books={books} />;
  };

  renderSearch = () => {
    const { loading, books } = this.state;
    return <Search loading={loading} books={books} />;
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
