import axios from 'axios';

export const fetchProfile = () => {
  let userId = JSON.parse(window.localStorage.getItem('okta-token-storage'));
  userId = userId.idToken.claims.sub;
  return dispatch => {
    axios.get(`http://localhost:8000/profile/${userId}`).then(res => {
      console.log(res.data);
      dispatch({ type: 'FETCH_PROFILE_SUCCESS', payload: res.data });
    });
  };
};
