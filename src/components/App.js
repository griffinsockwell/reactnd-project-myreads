import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
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
  renderHome = () => {
    return <Home />;
  };

  renderSearch = () => {
    return <Search />;
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
