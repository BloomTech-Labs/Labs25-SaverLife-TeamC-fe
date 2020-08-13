import React from 'react';
import { Layout } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Header } = Layout;

const StyledHeader = styled(Header)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 5% 2%;
  padding-bottom: 3%;
  border-bottom: 1px solid grey;
  height: 55px;
  img {
    width: 35%;
  }
  .hamburger-menu {
    font-size: 4rem;
  }
`;

function AppHeader() {
  const toggleMenu = e => {
    const menu = document.getElementsByClassName('menu')[0];
    menu.classList.toggle('toggle-menu');
  };
  return (
    <Layout>
      <StyledHeader className="header-container">
        <MenuOutlined onClick={toggleMenu} className="hamburger-menu" />
        <img src="saverlife.png" alt="SaverLife Logo" />
      </StyledHeader>
    </Layout>
  );
}

export default AppHeader;
