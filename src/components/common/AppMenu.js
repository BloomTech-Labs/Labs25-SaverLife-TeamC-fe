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
`;

function AppMenu() {
  const handleClick = e => {
    console.log('click ', e);
  };
  return (
    <StyledMenu className="menu toggle-menu" onClick={handleClick}>
      <ItemGroup title="SaverLife">
        <Item>
          <Link className="link-to" to="/categories">
            categories component
          </Link>
        </Item>
        <Item>
          <Link className="link-to" to="/budget">
            budget component
          </Link>
        </Item>
        <Item>
          <Link className="link-to" to="/profile">
            profile component
          </Link>
        </Item>
        <Item>
          <Link className="link-to" to="/progress">
            progress component
          </Link>
        </Item>
        <Item>
          <Link className="link-to" to="/transactions">
            transactions component
          </Link>
        </Item>
      </ItemGroup>
      {/* </SubMenu> */}
    </StyledMenu>
  );
}

export default AppMenu;
