import PropTypes from 'prop-types';
import React from 'react';
import Loader from 'react-loader-spinner';

function LoadingComponent() {
  return (
    <div>
      <Loader
        type="Watch"
        color="#c01089"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
}

export default LoadingComponent;

LoadingComponent.propTypes = {
  message: PropTypes.string.isRequired,
};
