import React from 'react';
import styled from 'styled-components';

const StyledBook = styled.li`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(74, 74, 74, 0.2);
  width: 200px;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  div {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  strong {
    margin: 4px;
  }
  small {
    margin: 2px;
  }
  select {
    width: 100%;
    height: 32px;
    background: #f1f1f1;
    border: none;
    font-size: 14px;
  }
`;

const Book = props => {
  const { book } = props;

  return (
    <StyledBook>
      <div>
        <img src={book.imageLinks.smallThumbnail} alt={book.title} />
        <strong>
          {book.title}
        </strong>
        {book.authors.map(author =>
          <small key={author}>
            {author}
          </small>
        )}
      </div>

      <select value={book.shelf} onChange={() => {}}>
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </StyledBook>
  );
};

export default Book;
