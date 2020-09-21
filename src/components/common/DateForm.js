import React, { useState } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  form {
    padding: 2% 5%;
    display: flex;
    flex-direction: row;
    width: 100%;
  }
`;
function DateForm(props) {
  const { setChosenMonth, allMonths, currentMonth } = props;

  const updateChartDate = e => {
    setChosenMonth(e.target.value);
  };

  return (
    <StyledDiv>
      <form>
        <label name="dates">Please Select A Month: </label>
        <select
          onChange={updateChartDate}
          name="dates"
          id="categorized-spending-dates"
          value={currentMonth}
        >
          {allMonths.map((month, i) => {
            return (
              <option key={i} value={month}>
                {month}
              </option>
            );
          })}
        </select>
      </form>
    </StyledDiv>
  );
}

export default DateForm;
