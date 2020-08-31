import React from 'react';
import Plot from 'react-plotly.js';

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    state: state,
  };
};
const BudgetPlot = props => {
  const { data, categories } = props;

  const { state } = props;
  const budgetObject = state.budgetReducer;
  const budgetItems = [];
  categories.forEach(cat => {
    budgetItems.push(budgetObject[cat]);
  });

  console.log({ budgetItems });

  return (
    <>
      <Plot
        data={[
          {
            x: data,
            y: categories,
            type: 'bar',
            width: 0.3,
            orientation: 'h',
            name: 'Your Spending',
          },
          {
            x: budgetItems,
            y: categories,
            type: 'bar',
            width: 0.3,
            orientation: 'h',
            name: 'Your Budget',
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

export default connect(mapStateToProps, {})(BudgetPlot);
