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
    min-height: 200px;
    padding: 0 10px;
    list-style-type: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
const StyledNoBooks = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #4a4a4a;
  i {
    font-size: 50px;
    margin-top: 4px;
  }
`;

const BookShelf = props => {
  const { title, filter, books, movingBook, updateBook } = props;

  let booksFiltered;
  if (filter) {
    booksFiltered = books.filter(book => book.shelf === filter);
  } else {
    booksFiltered = books;
  }

  return (
    <StyledBookShelf>
      <h2>
        {title}
      </h2>

      {booksFiltered.length
        ? <ul>
            {booksFiltered.map(book =>
              <Book
                key={book.id}
                book={book}
                movingBook={movingBook}
                updateBook={updateBook}
              />
            )}
          </ul>
        : <StyledNoBooks>
            <small>No books in this shelf</small>
            <i className="material-icons">library_books</i>
          </StyledNoBooks>}
    </StyledBookShelf>
  );
};

export default BookShelf;
