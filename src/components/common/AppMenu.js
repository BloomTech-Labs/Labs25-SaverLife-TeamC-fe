import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const { Item, ItemGroup } = Menu;

const StyledMenu = styled(Menu)`
  position: fixed;
  top: 75px;
  background: white;
  .link-to {
    font-size: 1.6rem;
  }
  z-index: 1;
`;

function AppMenu() {
  const handleClick = e => {
    console.log('click ', e);
  };
  return (
    <StyledMenu className="menu toggle-menu" onClick={handleClick}>
      <ItemGroup title="SaverLife">
        <Item>
          <Link className="link-to" to="/">
            Home
          </Link>
        </Item>
        <Item>
          <Link className="link-to" to="/categories">
            Spending by Category
          </Link>
        </Item>
        <Item>
          <Link className="link-to" to="/budget">
            Your Budget
          </Link>
        </Item>
        <Item>
          <Link className="link-to" to="/progress">
            Your Progress
          </Link>
        </Item>
        <Item>
          <Link className="link-to" to="/transactions">
            All Transactions
          </Link>
        </Item>
      </ItemGroup>
      {/* </SubMenu> */}
    </StyledMenu>
  );
}

export default AppMenu;
