import React, { useState } from 'react';
import './SavingsForm.css';

const GoalForm = () => {
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
  };
  return (
    <form onSubmit={handleSubmit} className="savings-form">
      <label>$ </label>
      <input
        name="goalAmount"
        id="goal"
        type="text"
        placeholder="350"
        onChange={onChange}
        value={goal.goalAmount}
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default GoalForm;
