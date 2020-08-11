import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import AppHeader from '../../common/AppHeader';

function RenderHomePage(props) {
  const { userInfo, authService } = props;
  return (
    <div>
      <AppHeader />
      <div>
        <h1>Hi {userInfo.name} Welcome to Labs Basic SPA</h1>

        <div>
          <p>
            This is an example of a common example of how we'd like for you to
            approach components.
          </p>
          <p>
            <Link to="/signup">Signup component</Link>
          </p>
          <p>
            <Link to="/categories">categories component</Link>
          </p>

          <p>
            <Link to="/budget">budget component</Link>
          </p>
          <p>
            <Link to="/profile">profile component</Link>
          </p>
          <p>
            <Link to="/progress">progress component</Link>
          </p>
          <p>
            <Link to="/transactions">transactions component</Link>
          </p>
          <p>
            <Button type="primary" onClick={() => authService.logout()}>
              Logout
            </Button>
            <Button>Click Me!</Button>
            <Button className="danger">Danger Button</Button>
          </p>
        </div>
      </div>
    </div>
  );
}
export default RenderHomePage;
