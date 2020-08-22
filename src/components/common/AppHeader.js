import React from 'react';
import { Layout } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import NavBar from './NavBar';

const { Header } = Layout;

const StyledHeader = styled(Header)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 3%;
  border-bottom: 1px solid grey;
  width: 100%;
  border: 1px red solid;
  left: 0;
  background: rgba(255, 255, 255, 0.8);
  z-index: 1;
  padding: 5%;
  img {
    width: 35%;
  }
  .hamburger-menu {
    font-size: 4rem;
  }

  @media (min-device-width: 600px) and (max-device-width: 800px) {
    padding: 3% 5%;
    img {
      width: 30%;
    }
    .hamburger-menu {
      font-size: 5rem;
    }
  }
  @media (min-device-width: 1000px) {
    .hamburger-menu {
      display: none;
    }
  }

  @media (min-device-width: 1000px) and (max-device-width: 1500px) {
    padding: 3% 5%;
    img {
      width: 15%;
    }
  }

  @media (min-device-width: 1501px)  {
    padding: 3% 5%;
    img {
      width: 12%;
    }
  
  @media (min-device-width: 2001px)  {
    padding: 2% 3%;
    img {
      width: 12%;
    }
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
        <NavBar />
        <img src="saverlife.png" alt="SaverLife Logo" />
      </StyledHeader>
    </Layout>
  );
}

export default AppHeader;
