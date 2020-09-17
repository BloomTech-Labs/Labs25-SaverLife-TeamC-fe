import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useOktaAuth } from '@okta/okta-react';

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
  const { authState, authService } = useOktaAuth();

  return (
    <StyledMenu className="menu toggle-menu">
      <ItemGroup title="SaverLife">
        <Item>
          <Link className="link-to" to="/">
            Home
          </Link>
        </Item>
        <Item>
          <Link className="link-to" to="/categories">
            Spending By Category
          </Link>
        </Item>

        <Item>
          <Link className="link-to" to="/profile">
            profile component
          </Link>
        </Item>
        <Item>
          <Link className="link-to" to="/progress">
            Progress
          </Link>
        </Item>
        <Item>
          <Link className="link-to" to="/transactions">
            Transactions
          </Link>
        </Item>
        <Item>
          <Link className="link-to" to="/budget">
            My Profile
          </Link>
        </Item>
        <Item onClick={() => authService.logout()}>
          <Link className="link-to" to="/login">
            Log Out
          </Link>
        </Item>
      </ItemGroup>
      {/* </SubMenu> */}
    </StyledMenu>
  );
}

export default AppMenu;
