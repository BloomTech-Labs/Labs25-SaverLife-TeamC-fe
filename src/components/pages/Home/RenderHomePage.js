import 'antd/lib/menu/style/index.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import AppHeader from '../../common/AppHeader';
import AppMenu from '../../common/AppMenu';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Gravatar from 'react-gravatar';

// Graphs
import CategorizedPlot from './Graphs/CategorizedPlot';
import TransactionPlot from './Graphs/TransactionPlot';
import GoalsPlot from './Graphs/GoalsPlot';

const StyledDiv = styled.div`
  padding: 5% 2%;
  h1 {
    font-size: 2rem;
  }

  .transaction-plot {
  }
  .dash-card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    .dash-card {
      margin: 2% 0;
    }
  }
  .dash-card {
    padding: 0 2%;
    border-radius: 2%;
    border: 1px solid gray;
    display: flex;
    flex-direction: column;
    width: 80%;
  }
  .card-title {
    p {
      border-bottom: 1px solid lightgray;
      padding: 2% 0;
      font-size: 1rem;
    }
  }
  .card-body {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 0 2%;
    padding: 2% 0;
    * {
      margin: 1% 0;
    }
    .right-button {
      border: 1px solid #ecb7db;
      border-radius: 2%;
      padding: 2%;
      width: 100%;

      &:hover {
        background: #ecb7db;
        color: white;
      }
    }
  }
`;

const mapStateToProps = state => {
  return {
    state: state,
  };
};

//TODO: move these cards into separate components probably
function RenderHomePage(props) {
  const { userInfo, authService, state } = props;
  const transactions = state.transactionReducer.data;
  // get 5 most recent transactions for the table
  //THIS IS FOR TRANSACTIONS
  const tableHeaders = Object.keys(transactions[0]);

  //hack to get rid of vendor code... will change based on what final data looks like
  tableHeaders.splice(2, 1);

  const newObj = {};

  tableHeaders.forEach(header => {
    newObj[header] = [];
  });

  transactions.forEach(item => {
    tableHeaders.forEach(header => {
      newObj[header].push(item[header]);
    });
  });

  const arrayOfTransactionArrays = [];

  tableHeaders.forEach(header => {
    arrayOfTransactionArrays.push(newObj[header].slice(0, 5));
  });

  //grab data for a pie chart of categorized spending
  //THIS IS FOR THE CATEGORIZED DATA
  //make a dictionary of categories and amount spent

  const categoriesSpending = {};
  transactions.forEach(trans => {
    if (!(trans.category in categoriesSpending)) {
      categoriesSpending[trans.category] = trans.amount;
    } else {
      categoriesSpending[trans.category] =
        categoriesSpending[trans.category] + trans.amount;
    }
  });

  const categoryList = Object.keys(categoriesSpending);
  const categoriesData = [];
  categoryList.forEach(cat => {
    categoriesData.push(categoriesSpending[cat]);
  });

  return (
    <div>
      <AppHeader />
      <div className="content-container">
        <AppMenu />
        <StyledDiv>
          <h1>Welcome back, {userInfo.name}</h1>
          <Gravatar email={userInfo.email} />
          <Gravatar email="imriven@yahoo.com" />
          <div className="dash-card-container">
            {/* transactions card */}
            <div className="dash-card transactions-summary">
              <div className="card-title">
                <p>Recent Transactions</p>
              </div>
              <div className="card-body">
                <TransactionPlot
                  headers={tableHeaders}
                  transactionArrays={arrayOfTransactionArrays}
                />
                <Link to="/transactions" className="right-button">
                  See All Transactions
                </Link>
              </div>
            </div>

            {/* Categorized Spending  */}
            <div className="dash-card category-summary">
              <div className="card-title">
                <p>Spending By Category</p>
              </div>
              <div className="card-body">
                <CategorizedPlot
                  categories={categoryList}
                  data={categoriesData}
                />
                <Link to="/categories" className="right-button">
                  See Spending By Category
                </Link>
              </div>
            </div>

            {/* Goals Meter */}
            <div className="dash-card goal-summary">
              <div className="card-title">
                <p>Progress Meter</p>
              </div>
              <div className="card-body">
                <GoalsPlot />
                <Link to="/progress" className="right-button">
                  See All Progress
                </Link>
              </div>
            </div>

            {/* Predicted Budget */}
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
