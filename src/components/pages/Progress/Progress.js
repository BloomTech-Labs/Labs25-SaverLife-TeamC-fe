//This will show the user's progress... visualization ideation pending TODO

import React from 'react';

import AppHeader from '../../common/AppHeader';
import AppMenu from '../../common/AppMenu';

import ProgressBar from './ProgressBar';

const Progress = () => {
  return (
    <div>
      <AppHeader />
      <div className="content-container">
        <AppMenu />
        <ProgressBar />
        <h1>This is the progress component!</h1>
      </div>
    </div>
  );
};

export default Progress;
