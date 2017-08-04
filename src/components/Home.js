import React from 'react';
import PropTypes from 'prop-types';
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

Home.propTypes = {
  books: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  movingBook: PropTypes.string.isRequired,
  updateBook: PropTypes.func.isRequired
};

export default Home;
