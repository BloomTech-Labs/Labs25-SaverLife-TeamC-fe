//This will show the user's progress... visualization ideation pending TODO

import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// div that covers the entire bar and the space around it
const BarDiv = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 30px;

  margin: 5% 0 5%;
`;

// the full progress bar
const FullBar = styled.div`
  width: 80%;
  height: 100%;

  background-color: grey;
  border-radius: 15px;
  margin: 50;
`;

// the number displayed on the bar
const Label = styled.span`
  color: white;
  fontweight: bold;

  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin-right: 1%;
`;

const ProgressBar = props => {
  let barColor = '#c01089';
  let percent = (props.saved / props.goal) * 100;
  percent = Math.round(percent * 100) / 100; // rounding to 2 decimal places

  if (percent < 6) {
    barColor = 'None';
  }
  // the colored part of the bar that is displaying the percentage dynamically
  const CompletedBar = {
    height: '100%',
    width: `${percent}%`,
    backgroundColor: barColor,
    borderRadius: 'inherit',
    textAlign: 'right',
  };

  return (
    <BarDiv>
      <FullBar>
        <div style={CompletedBar}>
          <Label>{`${percent}%`}</Label>
        </div>
      </FullBar>
    </BarDiv>
  );
};

const mapStateToProps = state => {
  return {
    saved: state.goalReducer.saved,
    goal: state.goalReducer.goal,
  };
};
export default connect(mapStateToProps, {})(ProgressBar);
