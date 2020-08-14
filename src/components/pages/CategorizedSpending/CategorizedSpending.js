//Shows spending by category, lets the user look historically TODO: discuss if this should be represented against a budget

import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import CategorizedPlot from './CategorizedPlot';
import AppHeader from '../../common/AppHeader';
import AppMenu from '../../common/AppMenu';
import DateForm from './DateForm';

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
  const [chosenMonth, setChosenMonth] = useState('');

  //Make the data work for us
  const categoriesSpending = {};
  const dateOptions = {};
  transactions.forEach(trans => {
    //accumulate transactions
    if (!(trans.category in categoriesSpending)) {
      categoriesSpending[trans.category] = trans.amount;
    } else {
      categoriesSpending[trans.category] =
        categoriesSpending[trans.category] + trans.amount;
    }

    //also get a list of possible months while we're at it

    const monthYear = trans.date.split('-')[0] + '-' + trans.date.split('-')[1];
    if (!(monthYear in dateOptions)) {
      dateOptions[monthYear] = true;
    }
    console.log(dateOptions);
  });

  const categoryList = Object.keys(categoriesSpending);
  const categoriesData = [];
  categoryList.forEach(cat => {
    categoriesData.push(categoriesSpending[cat]);
  });

  console.log(transactions);

  return (
    <>
      <div>
        <AppHeader />
        <div className="content-container">
          <AppMenu />
          <StyledDiv>
            <h1>Spending By Category</h1>
            <CategorizedPlot
              className="cat-plot"
              data={categoriesData}
              categories={categoryList}
            />
            <DateForm
              allMonths={[]}
              chosenMonth={chosenMonth}
              setChosenMonth={setChosenMonth}
            />
          </StyledDiv>
        </div>
      </div>
    </>
  );
};

export default connect(mapStateToProps, {})(CategorizedSpending);
