import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledAppHeader = styled.div`
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(74, 74, 74, 0.2);
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  div {
    height: 52px;
    flex: 1;
    display: flex;
    align-items: center;
    border-right: 1px solid #f1f1f1;
  }
`;
const activeClassName = 'nav-item-active';
const StyledHomeLink = styled(NavLink).attrs({ activeClassName })`
  text-decoration: none;
  margin: 0 15px;
  color: #4a4a4a;
  transition: all 0.2s;
  :hover {
    color: #02AFDF;
  }
  &.${activeClassName} {
    color: #02AFDF;
  }
  h1 {
    font-size: 24px;
  }
`;
const StyledSearchLink = styled(NavLink).attrs({ activeClassName })`
  text-decoration: none;
  margin: 0 15px;
  color: #4a4a4a;
  display: flex;
  align-items: center;
  transition: all 0.2s;
  :hover {
    color: #02AFDF;
  }
  &.${activeClassName} {
    color: #02AFDF;
  }
  i {
    font-size: 20px;
    margin-right: 3px;
  }
`;

const AppHeader = () =>
  <StyledAppHeader>
    <div>
      <StyledHomeLink exact to="/">
        <h1>MyReads</h1>
      </StyledHomeLink>
    </div>

    <StyledSearchLink exact to="/search">
      <i className="material-icons">search</i>
      <span>Search for books</span>
    </StyledSearchLink>
  </StyledAppHeader>;

export default AppHeader;
