import PropTypes from 'prop-types';
import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import {
  MainWrapper,
  LoaderWrapper,
  LoaderWrapper2,
  SaverLifeLoader,
  Para,
} from './loadingComponentStyle';

function LoadingComponent() {
  return (
    <MainWrapper>
      <LoaderWrapper2>
        <LoaderWrapper>
          <SaverLifeLoader />
        </LoaderWrapper>
        <Para>SaverLife Is Retrieving Your Information</Para>
      </LoaderWrapper2>
    </MainWrapper>
  );
}

export default LoadingComponent;

LoadingComponent.propTypes = {
  message: PropTypes.string.isRequired,
};
