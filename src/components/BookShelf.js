import React from 'react';
import styled from 'styled-components';
import Book from './Book';

const StyledBookShelf = styled.div`
  padding: 10px 0;
  border-top: 1px solid #e1e1e1;
  h2 {
    text-align: center;
    padding: 10px 0 0 10px;
    color: #9b9b9b;
  }
  ul {
    padding: 0 10px;
    min-height: 200px;
    list-style-type: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const BookShelf = props => {
  const { title, filter, books } = props;
  const booksFiltered = books.filter(book => book.shelf === filter);

  return (
    <StyledBookShelf>
      <h2>
        {title}
      </h2>
      <ul>
        {booksFiltered.map(book => <Book key={book.id} book={book} />)}
      </ul>
    </StyledBookShelf>
  );
};

export default BookShelf;
