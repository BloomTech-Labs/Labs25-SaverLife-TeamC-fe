import React from 'react';
import Plot from 'react-plotly.js';

const BudgetPlot = props => {
  const { data, categories } = props;
  return (
    <>
      <Plot
        data={[
          {
            x: data,
            y: categories,
            type: 'bar',
            width: 0.6,
            orientation: 'h',
          },
        ]}
        layout={{
          width: 300,
          height: 400,
          margin: { l: 100, r: 0, t: 0, b: 20 },
          yaxis: {
            type: 'category',
            font: {
              size: 400,
            },
          },
        }}
      />
    </>
  );
};

export default BudgetPlot;
