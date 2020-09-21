import axios from 'axios';

export const createTransactionData = () => {
  let userId = JSON.parse(window.localStorage.getItem('okta-token-storage'));
  userId = userId.idToken.claims.sub;
  return dispatch => {
    axios
      .get(
        `https://saver-life-team-c.herokuapp.com/profile/fetching/transactions/${userId}`
      )
      .then(res => {
        dispatch({ type: 'CREATE_TRANSACTION_DATA_SUCCESS', payload: null });
      });
  };
};
