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
  const { loading, books, movingBook, updateBook } = props;

  const shelves = [
    {
      title: 'Currently Reading',
      value: 'currentlyReading'
    },
    {
      title: 'Want to Read',
      value: 'wantToRead'
    },
    {
      title: 'Read',
      value: 'read'
    }
  ];

  let component;
  if (loading) {
    component = <StyledLoading>Fetching your books...</StyledLoading>;
  } else {
    component = (
      <StyledHome>
        {shelves.map(shelf =>
          <BookShelf
            key={shelf.value}
            title={shelf.title}
            filter={shelf.value}
            books={books}
            movingBook={movingBook}
            updateBook={updateBook}
          />
        )}
      </StyledHome>
    );
  }

  return component;
};

export default Home;
