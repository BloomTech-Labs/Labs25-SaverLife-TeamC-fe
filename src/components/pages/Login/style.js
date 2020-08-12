import Styled from 'styled-components';
import Bank from './piggybank.png';

export const MainContainerWrapper = Styled.div`
background: url(${Bank});
background-repeat: no-repeat;
background-size: cover;
background-position: 25% 5%;
margin: 0;
padding: 0;
display:flex;
width: 99vw;
height: 98vh;
justify-content: center;
align-items: center;
align-content: center;
overflow-y: hidden;
overflow-x: hidden;
@media (max-width: 320px) {
    height: 100vh;
    background: none;
    background-color: none;
  }
@media (min-width: 360px) and (max-width: 500px) {
    height: 100vh;
    background: none;
    background-color: #00a6af;
  }
@media (min-width: 600px) and (max-width: 800px) {
    height: 100vh;
    background: url(${Bank});
    background-position: 80% 5%;
    background-size: cover;
  }
`;
