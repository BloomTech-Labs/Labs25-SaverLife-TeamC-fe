import React from 'react';
// import { connect } from 'react-redux';

import Plot from 'react-plotly.js';

function GoalsPlot(props) {
  const { saved, goal } = props;
  return (
    <div>
      <Plot
        data={[
          {
            type: 'indicator',
            domain: { x: [0, 1], y: [0, 1] },
            value: saved,
            title: { text: 'Goal Meter' },
            mode: 'gauge+number',
            delta: { reference: goal },
            gauge: { axis: { range: [null, 400] } },
          },
        ]}
      />
    </div>
  );
}
export default GoalsPlot;
