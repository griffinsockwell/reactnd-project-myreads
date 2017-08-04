import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import styled from 'styled-components';
import searchTerms from '../utils/searchTerms';

const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
const StyledSelect = styled(Select)`
  width: 300px;
`;
const StyledSearchTerm = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    border: none;
    background: none;
    margin-left: 6px;
  }
`;

class SearchBar extends React.Component {
  state = {
    term: ''
  };

  handleChange = val => {
    const term = val.value;
    this.setState({ term });
    this.props.searchForBooks(term);
  };

  clearTerm = () => {
    this.setState({ term: '' });
  };

  render() {
    const { term } = this.state;

    let searchComponent;
    if (this.props.searching) {
      searchComponent = (
        <StyledSearchTerm>Searching for books...</StyledSearchTerm>
      );
    } else if (term) {
      searchComponent = (
        <StyledSearchTerm>
          <span>
            {term}
          </span>
          <button onClick={this.clearTerm}>
            <i className="material-icons">close</i>
          </button>
        </StyledSearchTerm>
      );
    } else {
      searchComponent = (
        <StyledSelect
          options={searchTerms}
          onChange={this.handleChange}
          placeholder="Search for books"
        />
      );
    }

    return (
      <StyledSearchBar>
        {searchComponent}
      </StyledSearchBar>
    );
  }
}

export default SearchBar;
