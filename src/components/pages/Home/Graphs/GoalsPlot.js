import React from 'react';
// import { connect } from 'react-redux';

import Plot from 'react-plotly.js';

function GoalsPlot(props) {
  const { saved, goal } = props;
  return (
    <div className="goal-graph">
      <Plot
        className="goal-plot"
        data={[
          {
            domain: { x: [0, 1], y: [0, 1] },
            value: saved,
            title: { text: 'Progress Meter' },
            type: 'indicator',
            mode: 'gauge+number',
            delta: { reference: goal },
            gauge: { axis: { range: [null, 400] } },
          },
        ]}
        layout={{
          width: 300,
          height: 300,
          margin: { l: 30, r: 90, t: 30, b: 30 },
        }}
      />
    </div>
  );
}
export default GoalsPlot;
