import React from 'react';

import Plot from 'react-plotly.js';

function TransactionPlot(props) {
  const { headers, transactionArrays } = props;
  return (
    <>
      <Plot
        className="transaction-plot"
        data={[
          {
            type: 'table',
            header: {
              values: headers,
              align: 'center',
              line: { width: 1, color: 'black' },
              fill: { color: 'grey' },
              font: { family: 'Arial', size: 8, color: 'white' },
            },
            cells: {
              values: transactionArrays,
              align: 'center',
              line: { color: 'black', width: 1 },
              font: { family: 'Arial', size: 8, color: ['black'] },
            },
          },
        ]}
        layout={{
          width: 250,
          height: 150,
          margin: { l: 0, r: 0, t: 0, b: 0 },
        }}
      />
    </>
  );
}

export default TransactionPlot;
