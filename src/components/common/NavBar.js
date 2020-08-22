import React from 'react';
import { NavLink } from 'react-router-dom';
import Styled from 'styled-components';

const Navigation = Styled.div`
display:none;
width: 80%;
border: 1px red solid;
justify-content: space-between;
  @media (min-device-width: 1000px) {
      display: flex;
  }
`;

const NavBar = () => {
  return (
    <Navigation>
      <NavLink to="/" activeClassName="selected">
        Home
      </NavLink>
      <NavLink to="/categories" activeClassName="selected">
        Categories
      </NavLink>
      <NavLink to="/budget" activeClassName="selected">
        Budget
      </NavLink>
      <NavLink to="/profile" activeClassName="selected">
        Profile
      </NavLink>
      <NavLink to="/progress" activeClassName="selected">
        Progress
      </NavLink>
      <NavLink to="/transactions" activeClassName="selected">
        Transactions
      </NavLink>
    </Navigation>
  );
};
export default NavBar;
