const initialState = {
  totalSaved: 0,
  totalSavedDate: 0,
  goal: 0,
};

export const goalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GOAL_PROGRESS_SUCCESS':
      return {
        ...state,
        totalSaved: action.payload,
      };
    case 'FETCH_PROFILE_SUCCESS':
      return {
        ...state,
        totalSaved: action.payload,
      };
  }

  return state;
};
