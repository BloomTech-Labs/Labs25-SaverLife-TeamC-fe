import 'antd/lib/menu/style/index.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import AppHeader from '../../common/AppHeader';
import AppMenu from '../../common/AppMenu';
import styled from 'styled-components';
import Plot from 'react-plotly.js';
import { connect } from 'react-redux';
const StyledDiv = styled.div`
  padding: 5% 2%;
  h1 {
    font-size: 2rem;
  }

  .transaction-plot {
    width: 50%;
  }
`;

const mapStateToProps = state => {
  return {
    state: state,
  };
};

function RenderHomePage(props) {
  const { userInfo, authService, state } = props;
  const transactions = state.transactionReducer.data;
  // // get 5 most recent transactions for the table
  const tableHeaders = Object.keys(transactions[0]);

  //hack to get rid of vendor code
  tableHeaders.splice(2, 1);
  const innerData = [];

  // transactions.forEach(item => {
  //   const newArray = [];
  //   tableHeaders.forEach(header => {
  //     newArray.push(item[header])
  //   });
  //   innerData.push(newArray)
  // });
  //create a new object
  const newObj = {};

  tableHeaders.forEach(header => {
    newObj[header] = [];
  });

  transactions.forEach(item => {
    tableHeaders.forEach(header => {
      newObj[header].push(item[header]);
    });
  });

  //now we have an object of arrays for each of these items

  //lets get it into an array of arrays in the right order so we can feed it to the plot

  const arrayOfTransactionArrays = [];

  tableHeaders.forEach(header => {
    arrayOfTransactionArrays.push(newObj[header].slice(0, 5));
  });

  //okay now we have an array of empty arrays. let's do this

  // console.log({innerData})
  // console.log({tableHeaders})

  return (
    <div>
      <AppHeader />
      <div className="content-container">
        <AppMenu />
        <StyledDiv>
          <h1>Welcome back, {userInfo.name}</h1>
          <div className="dash-card-container">
            <div className="dash-card transactions-summary">
              <div className="card-title">
                <p>Past Transactions</p>
                <Plot
                  className="transaction-plot"
                  data={[
                    {
                      type: 'table',
                      columnwidth: 10,
                      header: {
                        values: tableHeaders,
                        align: 'center',
                        line: { width: 1, color: 'black' },
                        fill: { color: 'grey' },
                        font: { family: 'Arial', size: 8, color: 'white' },
                      },
                      cells: {
                        values: arrayOfTransactionArrays,
                        align: 'center',
                        line: { color: 'black', width: 1 },
                        font: { family: 'Arial', size: 8, color: ['black'] },
                      },

                      // mode: 'lines+markers',
                      // marker: {color: 'red'},
                    },
                  ]}
                  layout={{
                    width: '100%',
                    height: '100%',
                    title: 'Recent Transactions',
                  }}
                />
              </div>
              <div className="card-body"></div>
            </div>
          </div>
          <div>
            <Button type="primary" onClick={() => authService.logout()}>
              Logout
            </Button>
          </div>
        </StyledDiv>
      </div>
    </div>
  );
}
export default connect(mapStateToProps, {})(RenderHomePage);
