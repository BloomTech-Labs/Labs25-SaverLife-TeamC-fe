import React from 'react';

import Plot from 'react-plotly.js';

function MoneyForecastGraph() {
  return (
    <div className="forecast-graph">
      <Plot
        className="forecast-plot"
        data={[
          {
            type: 'indicator',
            mode: 'number+delta',
            value: 400, // this will hold the prop for next month forecast
            number: { prefix: '$' },
            delta: { position: 'top', reference: 320 },
            domain: { x: [0, 1], y: [0, 1] },
          },
        ]}
        layout={{
          paper_bgcolor: 'white',
          width: 150,
          height: 50,
          margin: { t: 0, b: 0, l: 0, r: 0 },
        }}
      />
    </div>
  );
}

export default MoneyForecastGraph;
