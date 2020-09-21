import axios from 'axios';

export const fetchSaved = () => {
  let userId = JSON.parse(window.localStorage.getItem('okta-token-storage'));
  return dispatch => {
    axios
      .get(
        `http://localhost:8000/api/goalprogress/profile/${userId.idToken.claims.sub}`
      )
      .then(res => {
        console.log('res is ', res.data);
      })
      .catch(err => console.log(err));
  };
};
