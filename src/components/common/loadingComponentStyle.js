import Styled from 'styled-components';
import { Bounce } from './keyframes';

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
`;

export const Para = Styled.p`
color: #c01089;
padding:3%;
font-size: 1.3rem;
`;
