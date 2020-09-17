import React from 'react';
import Plot from 'react-plotly.js';

function CategorizedPlot(props) {
  const { data } = props;

  return (
    <>
      {data && (
        <Plot
          data={data}
          layout={{
            autosize: true,
            flex: 2,
            margin: { l: 200, r: 0, t: 0, b: 0, pad: 15 },
            yaxis: {
              type: 'category',
              automargin: true,
              tickmode: 'linear',
              // font: {
              //   size: 400,
              // },
            },
            xaxis: {
              tickangle: -45,
            },
          }}
          config={{
            responsive: true,
          }}
        />
      )}
    </>
  );
}

export default CategorizedPlot;
