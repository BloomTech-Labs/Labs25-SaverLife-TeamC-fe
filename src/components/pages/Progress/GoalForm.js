import React, { useState } from 'react';
import './SavingsForm.css';

import { inputGoal, fetchBudget } from '../../../state/actions/profileActions';
import { connect } from 'react-redux';
import axios from 'axios';

const GoalForm = props => {
  const [goal, setGoal] = useState({
    goalAmount: '',
  });
  const onChange = e => {
    setGoal({ ...goal, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setGoal({ singleAmount: '' });
    props.inputGoal(goal.goalAmount);
    props.fetchBudget();
  };
  return (
    <form onSubmit={handleSubmit} className="savings-form">
      <label>$ </label>
      <input
        name="goalAmount"
        id="goal"
        type="text"
        placeholder={props.stateGoal}
        onChange={onChange}
        value={goal.goalAmount}
      />
      <button type="submit">submit</button>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    stateGoal: state.goalReducer.goal,
  };
};
export default connect(mapStateToProps, { inputGoal, fetchBudget })(GoalForm);
