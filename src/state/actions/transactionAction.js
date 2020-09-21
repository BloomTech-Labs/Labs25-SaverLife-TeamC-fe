import axios from 'axios';

export const fetchTransactionData = () => {
  let userId = JSON.parse(window.localStorage.getItem('okta-token-storage'));
  userId = userId.idToken.claims.sub;
  return dispatch => {
    axios
      .get(
        `https://saver-life-team-c.herokuapp.com/api/transactions/profile/${userId}`
      )
      .then(res => {
        res.data.map(item => {
          dispatch({ type: 'FETCH_TRANSACTION_DATA_SUCCESS', payload: item });
        });
      });
  };
};
