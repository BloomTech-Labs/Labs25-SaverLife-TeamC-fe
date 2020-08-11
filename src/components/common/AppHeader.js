import React from 'react';
import { Layout } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Header, Footer, Sider, Content } = Layout;

const StyledHeader = styled(Header)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 5% 2%;
  padding-bottom: 3%;
  border-bottom: 1px solid grey;
  img {
    width: 35%;
  }
  .hamburger-menu {
    font-size: 2rem;
  }
`;

function AppHeader() {
  return (
    <Layout>
      <StyledHeader className="header-container">
        <MenuOutlined className="hamburger-menu" />
        <img src="saverlife.png" alt="SaverLife Logo" />
      </StyledHeader>
    </Layout>
  );
}

export default AppHeader;
