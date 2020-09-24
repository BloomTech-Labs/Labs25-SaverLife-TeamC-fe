import React from 'react';
import { render } from '@testing-library/react';
import LandingPage from '../../components/pages/Landing/LandingPage';
import { BrowserRouter as Router } from 'react-router-dom';
it('renders landing page', () => {
  render(
    <Router>
      <LandingPage />
    </Router>
  );
});
