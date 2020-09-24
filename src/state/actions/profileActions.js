import axios from 'axios';

export const fetchProfile = () => {
  let userId = JSON.parse(window.localStorage.getItem('okta-token-storage'));
  userId = userId.idToken.claims.sub;
  return dispatch => {
    axios
      .get(`https://saver-life-team-c.herokuapp.com/profile/${userId}`)
      .then(res => {
        console.log(res.data);
        dispatch({ type: 'FETCH_PROFILE_SUCCESS', payload: res.data });
      });
  };
};

export const inputGoal = inputData => {
  let userId = JSON.parse(window.localStorage.getItem('okta-token-storage'));
  userId = userId.idToken.claims.sub;
  let inputBody = {
    id: userId,
    goalAmount: inputData.goalAmount,
    goalEndYear: inputData.goalEndYear,
    goalEndMonth: inputData.goalEndMonth,
  };
  axios.put('https://saver-life-team-c.herokuapp.com/profile/', inputBody);
};

export const fetchBudget = () => {
  let userId = JSON.parse(window.localStorage.getItem('okta-token-storage'));
  userId = userId.idToken.claims.sub;
  return dispatch => {
    axios
      .get(
        `https://saver-life-team-c.herokuapp.com/profile/fetching/budget/${userId}`
      )
      .then(res => {
        dispatch({ type: 'FETCH_BUDGET_SUCCESS', payload: res.data });
      });
  };
};
