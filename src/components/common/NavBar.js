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

const NaviLinks = Styled(NavLink)`
display:flex;
font-size: 1.5rem;

 :visited {
  color: #c01089;
}
 :hover {
  color: #ecb7db;
}
 :active {
  color: #c01089;
  font-weight: 800;
}
    .selected {
    color: #00a6af;
    font-weight:800;
    text-decoration: underline;  
    }
  @media (min-device-width: 1501px) and (max-device-width: 2000px)  {
      font-size: 2.3rem;
  }
    @media (min-device-width: 2001px) and (max-device-width: 3000px) {
    font-size: 2.5rem;
    }
`;

const NavBar = () => {
  return (
    <Navigation>
      <NaviLinks to="/" activeClassName="selected">
        Home
      </NaviLinks>
      <NaviLinks to="/categories" activeClassName="selected">
        Categories
      </NaviLinks>
      <NaviLinks to="/budget" activeClassName="selected">
        Budget
      </NaviLinks>
      <NaviLinks to="/profile" activeClassName="selected">
        Profile
      </NaviLinks>
      <NaviLinks to="/progress" activeClassName="selected">
        Progress
      </NaviLinks>
      <NaviLinks to="/transactions" activeClassName="selected">
        Transactions
      </NaviLinks>
    </Navigation>
  );
};
export default NavBar;
