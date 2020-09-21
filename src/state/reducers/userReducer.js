const initialState = {
  email: '',
  avatarURL: '',
  goalAmount: 0,
  goalStartDate: 0,
  userName: '',
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PROFILE_SUCCESS':
      return {
        ...state,
        email: action.payload.email,
        avatarURL: action.payload.avatarUrl,
        goalAmount: action.payload.goalAmount,
        goalStartDate: action.payload.goalStartDate,
        name: action.payload.name,
      };
  }
  return state;
};
