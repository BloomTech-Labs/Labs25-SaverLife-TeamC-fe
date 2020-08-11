import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const { Item, ItemGroup } = Menu;

const StyledMenu = styled(Menu)`
  position: fixed;
  top: 75px;
`;

function AppMenu() {
  const handleClick = e => {
    console.log('click ', e);
  };
  return (
    <StyledMenu className="menu toggle-menu" onClick={handleClick}>
      <ItemGroup title="SaverLife">
        <Item>
          <Link to="/categories">categories component</Link>
        </Item>
        <Item>
          <Link to="/budget">budget component</Link>
        </Item>
        <Item>
          <Link to="/profile">profile component</Link>
        </Item>
        <Item>
          <Link to="/progress">progress component</Link>
        </Item>
        <Item>
          <Link to="/transactions">transactions component</Link>
        </Item>
      </ItemGroup>
      {/* </SubMenu> */}
    </StyledMenu>
  );
}

export default AppMenu;
