import Styled from 'styled-components';
import { Bounce, Fade } from './keyframes';
import Loader from 'react-loader-spinner';

export const MainWrapper = Styled.div`
display:flex;
width:100%;
height:100vh;
justify-content: center;
align-items: center;
align-content: center;
margin: 0 auto;
flex-direction: column;
`;

export const LoaderWrapper = Styled.div`
animation: ${Bounce} 0.5s both;
display:flex;
justify-content: center;
align-items: center;
align-content: center;
height:30%;
width:50%;
  @media (min-device-width: 600px) and (max-device-width: 800px) {
    height:35%;
    width:50%;
  }
    @media (min-device-width: 1000px) and (max-device-width: 1200px) {
    height:35%;
    width:50%;
  }
    @media (min-device-width: 1400px) and (max-device-width: 1600px) {
    height:55%;
    width:35%;
  }
    @media (min-device-width: 2000px) and (max-device-width: 2600px) {
    height:35%;
    width:55%;
  }
`;

export const Para = Styled.p`
color: #c01089;
padding:3%;
font-size: 1.3rem;
text-align: center;
  @media (min-device-width: 600px) and (max-device-width: 800px) {
    margin-top:5%;
    font-size: 1.5rem;
  }
    @media (min-device-width: 1000px) and (max-device-width: 1200px) {
    margin-top:25%;
    font-size: 2.1rem;
  }

    @media (min-device-width: 1400px) and (max-device-width: 1600px) {
    margin-top:35%;
    font-size: 2.4rem;
  }
    @media (min-device-width: 2000px) and (max-device-width: 2600px) {
    margin-top:35%;
    font-size: 3rem;
  }
`;

export const LoaderWrapper2 = Styled.div`
animation: ${Fade} 1s ease-out reverse both;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
height:50%;
width: 50%;
  @media (min-device-width: 600px) and (max-device-width: 800px) {
    height:50%;
    width:60%;
  }
    @media (min-device-width: 1400px) and (max-device-width: 1600px) {
    height:35%;
    width:55%;
  }
    @media (min-device-width: 2000px) and (max-device-width: 2600px) {
    height:35%;
    width:55%;
  }
`;

export const SaverLifeLoader = Styled(Loader).attrs({
  type: 'Watch',
  color: '#ecb7db',
  width: 500,
  height: 500,
  timeout: 3000,
})`
    @media (min-device-width: 1400px) and (max-device-width: 1600px) {
    height:65%;
  }
    @media (min-device-width: 2000px) and (max-device-width: 2600px) {
    height:35%;
    width:55%;
  }
`;
