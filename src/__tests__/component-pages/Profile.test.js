import React from 'react';
import { renderRedux } from '../../utils/test-utils';
import Profile from '../../components/pages/Profile/Profile';

it('renders profile page', () => {
  renderRedux(<Profile />, {
    initialState: {
      goal: 400,
      saved: 162.14,
    },
  });
});
