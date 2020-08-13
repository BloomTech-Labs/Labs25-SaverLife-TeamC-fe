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
  height: 800px;
  margin: 20% 0;
  background-color: #00a6af;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Oval = styled.div`
  width: 90%;
  height: 95%;
  background-color: white;
  border-radius: 20rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 5rem;
  margin-top: 20%;
`;

const TextBody = styled.div`
  height: 55%;
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
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
          <Oval>
            <Title>Your Progress</Title>
            <ProgressBar />
            <TextBody>
              <h3>Amount saved: ${props.saved}</h3>
              <h3>Amount left: ${amountToGoal}</h3>
              <h3>Day(s) Remaining: {props.time}</h3>
              <h3>Goal: ${props.goal}</h3>
              <h3>Daily Saving Recommendation: ${dailySaving}</h3>
            </TextBody>
          </Oval>
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
