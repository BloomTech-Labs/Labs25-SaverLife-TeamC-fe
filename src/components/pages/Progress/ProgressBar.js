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

  margin: 20% 0 5%;
`;

// the actual pogress bar
const FullBar = styled.div`
  width: 80%;
  height: 100%;

  background-color: grey;
  border-radius: 25px;
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
  margin-right: 5%;
`;

const ProgressBar = props => {
  const percent = ((props.saved / props.goal) * 100).toFixed(2);
  const barColor = '#c01089';

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
