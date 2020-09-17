//Shows spending by category, lets the user look historically TODO: discuss if this should be represented against a budget

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CategorizedPlotWrapper from './CategorizedPlotWrapper';
import AppHeader from '../../common/AppHeader';
import AppMenu from '../../common/AppMenu';

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
  return (
    <>
      <div>
        <AppHeader />
        <div className="content-container">
          <AppMenu />

          <StyledDiv>
            <h1>Spending By Category</h1>
            {/* <h1>Your Spending For {chosenMonth}</h1> */}
            <CategorizedPlotWrapper showDate={true} className="cat-plot" />

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
