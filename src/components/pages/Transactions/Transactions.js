// This is where we'll list all transactions

//Idea: let the user search transactions? View how they're categorized? TODO: discuss how transactions are represented

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TransactionPlot from './TransactionPlot';
import AppHeader from '../../common/AppHeader';
import AppMenu from '../../common/AppMenu';
import DateForm from './DateForm';

const StyledDiv = styled.div``;

const mapStateToProps = state => {
  return {
    state: state,
  };
};
const Transactions = () => {
  return (
    <StyledDiv>
      <h1>This is the transactions component!</h1>
    </StyledDiv>
  );
};

export default connect(mapStateToProps, {})(Transactions);
