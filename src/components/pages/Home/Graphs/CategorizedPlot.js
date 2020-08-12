import React from 'react';

import Plot from 'react-plotly.js';

function CategorizedPlot(props) {
  const { data, categories } = props;
  return (
    <>
      <Plot
        className="category-plot"
        data={[
          {
            x: data,
            y: categories,
            text: categories,
            type: 'bar',
            width: 0.3,
            orientation: 'h',
            // textfont: {
            //   size: 400,
            // }
          },
        ]}
        layout={{
          width: 250,
          height: 200,
          margin: { l: 100, r: 0, t: 0, b: 20 },
          yaxis: {
            type: 'category',
            font: {
              size: 400,
            },
          },

          // showlegend: true
        }}
      />
    </>
  );
}

export default CategorizedPlot;
