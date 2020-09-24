const initialState = {
  goal: 0,
  endYear: 0,
  endMonth: 0,
  monthLeft: 0,
  nextMonthForcast: 0,
  suggestedBudget: 0,
};

export const goalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BUDGET_SUCCESS':
      return {
        ...state,
        goal: action.payload.goalAmount,
        endYear: action.payload.goalEndYear,
        endMonth: action.payload.goalEndMonth,
        monthLeft: action.payload.monthLeft,
        nextMonthForcast: action.payload.next,
      };
  }
  return state;
};
