import 'antd/lib/menu/style/index.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import AppHeader from '../../common/AppHeader';
import AppMenu from '../../common/AppMenu';

function RenderHomePage(props) {
  const { userInfo, authService } = props;
  return (
    <div>
      <AppHeader />
      <div className="content-conatiner">
        <AppMenu />
        <h1>Hi {userInfo.name} Welcome to Labs Basic SPA</h1>
        <div>
          <Button type="primary" onClick={() => authService.logout()}>
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}
export default RenderHomePage;
