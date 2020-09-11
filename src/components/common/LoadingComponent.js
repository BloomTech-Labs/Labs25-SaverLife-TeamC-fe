import PropTypes from 'prop-types';
import React from 'react';
import Loader from 'react-loader-spinner';
import { MainWrapper, LoaderWrapper, Para } from './loadingComponentStyle';

function LoadingComponent() {
  return (
    <MainWrapper>
      <LoaderWrapper>
        <Loader
          type="Watch"
          color="#c01089"
          height={100}
          width={100}
          timeout={12000} //3 secs
        />
      </LoaderWrapper>
      <Para>SaverLife Is Retrieving Your Information</Para>
    </MainWrapper>
  );
}

export default LoadingComponent;

LoadingComponent.propTypes = {
  message: PropTypes.string.isRequired,
};
