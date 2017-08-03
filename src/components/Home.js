import React from 'react';
import styled from 'styled-components';
import BookShelf from './BookShelf';

const StyledHome = styled.div`
  flex: 1;
  overflow: scroll;
`;
const StyledLoading = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Home = props => {
  const { loading, books } = props;

  let component;
  if (loading) {
    component = <StyledLoading>Fetching your books...</StyledLoading>;
  } else {
    component = (
      <StyledHome>
        <BookShelf
          title="Currently Reading"
          filter="currentlyReading"
          books={books}
        />
        <BookShelf title="Want to Read" filter="wantToRead" books={books} />
        <BookShelf title="Read" filter="read" books={books} />
      </StyledHome>
    );
  }

  return component;
};

export default Home;
