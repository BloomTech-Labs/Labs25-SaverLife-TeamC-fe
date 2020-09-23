//This will show the user's progress... visualization ideation pending TODO
import React from 'react';
import { connect } from 'react-redux';
import Loading from '../../common/LoadingComponent';

// Header
import AppHeader from '../../common/AppHeader';
import AppMenu from '../../common/AppMenu';

// Header end
import styled from 'styled-components';
import ProgressBar from './ProgressBar';
import SavingsModal from './SavingsModal';
import GoalModal from './GoalModal';
import PickDate from './PickDate';
import MoneyForecastGraph from './MoneyForecastGraph';

const Body = styled.div`
  width: 100%;
  height: 1300px;
  margin: 20% 0;
  background-color: #00a6af;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media only screen and (min-width: 600px) {
    margin: 10% 0;
    height: 1400px;
  }
`;

const TitleAndBarBox = styled.div`
  width: 90%;
  background-color: white;
  padding-bottom: 10%;
  border-radius: 0.2rem;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.14), 0 2px 3px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 600px) {
    width: 70%;
    height: 20%;
    padding-bottom: 4.5%;
  }
`;

const Title = styled.h1`
  font-size: 5rem;
`;

const TextBodyBox = styled.div`
  width: 90%;
  height: 60%;
  background-color: white;
  border-radius: 0.2rem;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.14), 0 2px 3px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media only screen and (min-width: 600px) {
    height: 70%;
    flex-direction: row;
    flex-wrap: wrap;
    width: 70%;
  }
`;

const TextBar = styled.div`
  font-size: 2.5rem;
  width: 85%;
  height: 12%;
  padding: 0 5%;
  border: 0.01rem solid black;
  border-radius: 0.2rem;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.14), 0 2px 3px rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media only screen and (min-width: 600px) {
    font-size: 3.5rem;
    width: 40%;
    height: 20%;
    margin: 2.5%;

    flex-direction: column;
  }
`;

const TextDesc = styled.h3``;

const TextVal = styled.h3``;

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
          <TitleAndBarBox>
            <Title>Your Progress</Title>
            <ProgressBar />
          </TitleAndBarBox>
          <TextBodyBox>
            <TextBar>
              <TextDesc>Savings Goal: ${props.goal}</TextDesc>{' '}
              <TextVal>
                <GoalModal />
              </TextVal>
            </TextBar>
            <TextBar>
              <TextDesc>I want to reach my savings goal by...</TextDesc>{' '}
              <TextVal>
                <PickDate />
              </TextVal>
            </TextBar>
            <TextBar>
              <TextDesc>
                Save Towards
                <br />
                Your Goal:
              </TextDesc>
              <TextVal>
                <SavingsModal />
              </TextVal>
            </TextBar>
            <TextBar>
              <TextDesc>Amount Saved:</TextDesc>
              <TextVal>${props.saved}</TextVal>
            </TextBar>
            <TextBar>
              <TextDesc>
                Month(s) Until <br />
                Goal is Reached:
              </TextDesc>
              <TextVal>{props.time}</TextVal>
            </TextBar>
            <TextBar>
              <TextDesc>
                Your Suggested
                <br />
                Budget:
              </TextDesc>
              <TextVal>{/* fancy budget graph? */}</TextVal>
            </TextBar>
            <TextBar>
              <TextDesc>
                Next Months
                <br />
                Money Forecast:
              </TextDesc>
              <TextVal>
                <MoneyForecastGraph />
              </TextVal>
            </TextBar>
          </TextBodyBox>
        </Body>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    saved: state.goalReducer.saved,
    goal: state.goalReducer.goal,
    time: state.goalReducer.timeLeft,
    budget: state.goalReducer.budget,
  };
};
export default connect(mapStateToProps, {})(Progress);
