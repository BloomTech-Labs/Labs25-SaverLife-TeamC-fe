// This is where we'll list all transactions

//Idea: let the user search transactions? View how they're categorized? TODO: discuss how transactions are represented

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TransactionPlot from './TransactionPlot';
import AppHeader from '../../common/AppHeader';
import AppMenu from '../../common/AppMenu';
import DateForm from '../../common/DateForm';
import Loading from '../../common/LoadingComponent';

const StyledDiv = styled.div`
padding: 5% 2%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h1 {
  font-size: 1.6rem;
}

.cat-plot {
  margin: 2% 0;
}

.button-to-home {
  border: 1px solid #ecb7db;
  border-radius: 2%;
  padding: 2%;
  width: 60%;

  &:hover {
    background: #ecb7db;
    color: white;
  }
`;

const mapStateToProps = state => {
  return {
    state: state,
  };
};
const Transactions = props => {
  const { state } = props;
  const transactions = state.transactionReducer.data;

  const [chosenMonth, setChosenMonth] = useState(null);
  const [plotlyData, setPlotlyData] = useState({
    data: [],
    headers: [],
  });

  //let's find the latest month
  let latestYear = 0;
  let latestMonth = 0;
  let dateOptions = {};

  transactions.forEach(trans => {
    //break up year and month so we can compare
    const year = parseInt(trans.date.split('-')[0]);
    const month = parseInt(trans.date.split('-')[1]);

    //compare and remember most recent date
    if (year > latestYear) {
      if (month > latestMonth) {
        latestYear = year;
        latestMonth = month;
      }
    }

    //Turn it into a string for storage
    let monthYear = year + '-' + month;
    //see if it's in our dates
    if (!(monthYear in dateOptions)) {
      dateOptions[monthYear] = true;
    }
  });

  //let's also create an array of months for our drop-down
  const allMonths = Object.keys(dateOptions);

  //grab the headers
  const headers = Object.keys(transactions[0]);

  //remove the column i don't like
  headers.splice(2, 1);

  //for plotly we need an array of these arrays
  let arrayOfTransactionArrays = [];

  useEffect(() => {
    if (chosenMonth == null) {
      setChosenMonth(latestYear + '-' + latestMonth);
    } else {
      //This is where we'll store the data for the graph
      //use this to store transaction data the way we want it
      const newObj = {};

      headers.forEach(header => {
        newObj[header] = [];
      });

      //our object is ready to hold transaction data now

      transactions.forEach(item => {
        const compareDate =
          item.date.split('-')[0] + '-' + item.date.split('-')[1];
        if (compareDate == chosenMonth) {
          headers.forEach(header => {
            newObj[header].push(item[header]);
          });
        }
      });

      arrayOfTransactionArrays = [];

      headers.forEach(header => {
        arrayOfTransactionArrays.push(newObj[header]); //you can slice here to retrieve only a segment of the results
      });

      setPlotlyData({
        data: arrayOfTransactionArrays,
        headers: headers,
      });
    }
  }, [chosenMonth]);

  return (
    <div>
      <AppHeader />
      <div className="content-container">
        <AppMenu />
        {transactions ? (
          <StyledDiv>
            <h1>Your Transactions For The Month Of {chosenMonth} </h1>
            <TransactionPlot
              headers={plotlyData.headers}
              transactionArrays={plotlyData.data}
            />
            <DateForm setChosenMonth={setChosenMonth} allMonths={allMonths} />
            <Link to="/" className="button-to-home">
              Return To Home
            </Link>
          </StyledDiv>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, {})(Transactions);
