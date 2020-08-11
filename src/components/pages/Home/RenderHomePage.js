import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

function RenderHomePage(props) {
  const { userInfo, authService } = props;
  return (
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
        </p>
      </div>
    </div>
  );
}
export default RenderHomePage;
