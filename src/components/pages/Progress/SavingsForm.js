import React, { useState } from 'react';
import './SavingsForm.css';

const SavingsForm = () => {
  const [savings, setSavings] = useState({
    singleAmount: '',
  });
  const onChange = e => {
    setSavings({ ...savings, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setSavings({ singleAmount: '' });
  };
  return (
    <form onSubmit={handleSubmit} className="savings-form">
      <label>$ </label>
      <input
        name="singleAmount"
        id="savings"
        type="text"
        placeholder="10.50"
        onChange={onChange}
        value={savings.singleAmount}
      />
      <button type="submit">Add Savings</button>
    </form>
  );
};

export default SavingsForm;
