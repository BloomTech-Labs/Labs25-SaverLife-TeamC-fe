//This will show the user's progress... visualization ideation pending TODO

import React from 'react';
import { connect } from 'react-redux';

// Header
import AppHeader from '../../common/AppHeader';
import AppMenu from '../../common/AppMenu';
// Header end

import styled from 'styled-components';
import ProgressBar from './ProgressBar';

const Body = styled.div`
  width: 100%;
  margin: 20% 0;
`;

const Title = styled.h1`
  margin: 0 5%;
`;

const FirstLine = styled.div`
  margin: 0 5%;
  display: flex;
  justify-content: space-between;
`;

const SecondLine = styled.div`
  margin: 0 5%;
  display: flex;
  justify-content: space-between;
`;

const ThirdLine = styled.div`
  margin: 0 5%;
  display: flex;
  justify-content: space-between;
`;

const Progress = props => {
  let amountToGoal = props.goal - props.saved;
  let dailySaving = amountToGoal / props.time;
  dailySaving = Math.round(dailySaving * 100) / 100;
  return (
    <div>
      <AppHeader />
      <div className="content-container">
        <AppMenu />
        <Body>
          <Title>Your Progress</Title>
          <ProgressBar />
          <FirstLine>
            <h3>Amount saved: ${props.saved}</h3>
            <h3>Amount left: ${amountToGoal}</h3>
          </FirstLine>
          <SecondLine>
            <h3>Day(s) Remaining: {props.time}</h3>
            <h3>Goal: ${props.goal}</h3>
          </SecondLine>
          <ThirdLine>
            <h3>Daily Saving Recommendation: ${dailySaving}</h3>
          </ThirdLine>
        </Body>
      </div>
    </div>
  );
};

//export default Progress;
const mapStateToProps = state => {
  return {
    saved: state.goalReducer.saved,
    goal: state.goalReducer.goal,
    time: state.goalReducer.timeLeft,
    budget: state.goalReducer.budget,
  };
};
export default connect(mapStateToProps, {})(Progress);
