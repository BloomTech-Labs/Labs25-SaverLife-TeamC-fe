import React from 'react';
import { renderRedux } from '../../utils/test-utils';
import Progress from '../../components/pages/Progress/Progress';

it('renders progress page', () => {
  renderRedux(<Progress />, {
    initialState: {
      goal: 400,
      budget: 750,
      timeLeft: 30,
      saved: 162.14,
    },
  });
});
