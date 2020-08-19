//Shows spending by category, lets the user look historically TODO: discuss if this should be represented against a budget

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CategorizedPlot from './CategorizedPlot';
import AppHeader from '../../common/AppHeader';
import AppMenu from '../../common/AppMenu';
import DateForm from '../../common/DateForm';

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
const CategorizedSpending = props => {
  const { state } = props;
  const transactions = state.transactionReducer.data;

  //This will not be functional until i have the actual date time formats from DS
  const [chosenMonth, setChosenMonth] = useState(null);
  const [plotlyData, setPlotlyData] = useState({
    data: [],
    categories: [],
  });

  //find the latest Month in the data to set chosen month
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

  //This is where we'll store the data for the graph
  let categoriesSpending = {};
  let categoryList = [];
  let categoriesData = [];

  useEffect(() => {
    if (chosenMonth == null) {
      //okay if this is the first time, we have the last month/year, let's set it. Now we can do everything else in the useeffect hook.
      setChosenMonth(latestYear + '-' + latestMonth);
    } else {
      //Every time that chosenMonth is updated, this will update the plotly chart

      //Accumulate all spending for the chosen month
      //clear the dictionary
      categoriesSpending = {};

      //Accumulate
      transactions.forEach(trans => {
        const filterDate =
          trans.date.split('-')[0] + '-' + trans.date.split('-')[1];
        //we need to filter for the chosen month!
        if (chosenMonth == filterDate) {
          if (!(trans.category in categoriesSpending)) {
            categoriesSpending[trans.category] = trans.amount;
          } else {
            categoriesSpending[trans.category] =
              categoriesSpending[trans.category] + trans.amount;
          }
        }
      });

      //Get a list of categories for use in plotly
      let categoryList = Object.keys(categoriesSpending);

      //Get a list of amounts for use in plotly
      categoriesData = [];
      categoryList.forEach(cat => {
        categoriesData.push(categoriesSpending[cat]);
      });

      //update state
      setPlotlyData({
        data: categoriesData,
        categories: categoryList,
      });
    }
  }, [chosenMonth]);

  return (
    <>
      <div>
        <AppHeader />
        <div className="content-container">
          <AppMenu />
          <StyledDiv>
            <h1>Spending By Category</h1>
            <h1>Your Spending For {chosenMonth}</h1>
            <CategorizedPlot
              className="cat-plot"
              data={plotlyData.data}
              categories={plotlyData.categories}
            />
            <DateForm allMonths={allMonths} setChosenMonth={setChosenMonth} />
            <Link to="/" className="button-to-home">
              Return Home
            </Link>
          </StyledDiv>
        </div>
      </div>
    </>
  );
};

export default connect(mapStateToProps, {})(CategorizedSpending);
