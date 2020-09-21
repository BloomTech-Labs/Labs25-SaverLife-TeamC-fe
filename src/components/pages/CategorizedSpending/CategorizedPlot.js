import React from 'react';
import Plot from 'react-plotly.js';

function CategorizedPlot(props) {
  const { data, height, width } = props;

  return (
    <>
      {data && (
        <Plot
          data={data}
          layout={{
            autosize: true,
            margin: { pad: 15 },
            yaxis: {
              type: 'category',
              automargin: true,
              tickmode: 'linear',
              dtick: ' ',
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
