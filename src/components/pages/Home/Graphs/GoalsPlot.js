import React from 'react';
import { connect } from 'react-redux';

import Plot from 'react-plotly.js';

function GoalsPlot(props) {
  return (
    <div className="goal-graph">
      <Plot
        className="goal-plot"
        data={[
          {
            domain: { x: [0, 1], y: [0, 1] },
            value: props.saved,
            title: { text: 'Progress Meter' },
            type: 'indicator',
            mode: 'gauge+number',
            delta: { reference: props.goal },
            gauge: {
              axis: { range: [null, props.goal] },
              bar: { color: '#c01089' },
            },
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

const mapStateToProps = state => {
  return {
    saved: state.goalReducer.saved,
    goal: state.goalReducer.goal,
  };
};

export default connect(mapStateToProps, {})(GoalsPlot);
