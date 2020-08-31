import React from 'react';
import { renderRedux } from '../../utils/test-utils';
import ProgressBar from '../../components/pages/Progress/ProgressBar';

it('renders progress bar', () => {
  renderRedux(<ProgressBar />, {
    initialState: {
      goal: 400,
      saved: 162.14,
    },
  });
});
