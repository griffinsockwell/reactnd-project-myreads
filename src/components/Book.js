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
  select {
    width: 100%;
    height: 32px;
    background: #f1f1f1;
    border: none;
    font-size: 14px;
  }
`;
const StyledBookInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  strong {
    margin: 4px;
  }
  small {
    margin: 2px;
  }
`;
const StyledMoving = styled.div`
  width: 100%;
  height: 32px;
  background: #f1f1f1;
  border: none;
  border-radius: 2px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class Book extends React.Component {
  handleChange = event => {
    const bookInfo = {
      book: this.props.book,
      shelf: event.target.value
    };
    this.props.updateBook(bookInfo);
  };

  render() {
    const { book, movingBook } = this.props;
    const isMoving = book.id === movingBook;

    return (
      <StyledBook>
        <StyledBookInfo>
          <img src={book.imageLinks.smallThumbnail} alt={book.title} />
          <strong>
            {book.title}
          </strong>

          {book.authors.map(author =>
            <small key={author}>
              {author}
            </small>
          )}
        </StyledBookInfo>

        {isMoving
          ? <StyledMoving>Moving shelves...</StyledMoving>
          : <select value={book.shelf} onChange={this.handleChange}>
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>}
      </StyledBook>
    );
  }
}

export default Book;
