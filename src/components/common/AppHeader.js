import React from 'react';
import { Link } from 'react-router-dom';
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
  @media (min-device-width: 300px) and (max-device-width: 599px) {
    padding: 3% 5%;
    }
  }
  @media (min-device-width: 600px) and (max-device-width: 800px) {
    padding: 3% 5%;
    img {
      width: 100%;
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
      width: 90%;
    }
  }

  @media (min-device-width: 1501px)  {
    padding: 3% 5%;
    img {
      width: 90%;
    }
  
  @media (min-device-width: 2001px)  {
    padding: 1.8% 3%;
    img {
      width: 80%;
    }
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: flex-end;
  width: 20%;
  @media (min-device-width: 250px) and (max-device-width: 499px) {
    padding: 3% 5%;
    width: 50%;
    img {
      width: 100%;
    }
  }
  @media (min-device-width: 500px) and (max-device-width: 599px) {
    padding: 3% 5%;
    width: 42%;
    img {
      width: 100%;
    }
  }
  @media (min-device-width: 600px) and (max-device-width: 800px) {
    width: 30%;
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
        <StyledLink to="/">
          <img src="saverlife.png" alt="SaverLife Logo" onClick />
        </StyledLink>
      </StyledHeader>
    </Layout>
  );
}

export default AppHeader;
