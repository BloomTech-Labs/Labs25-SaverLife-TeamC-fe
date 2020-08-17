import Styled from 'styled-components';
import Logo from '../../common/saverlife.png';
import Save from './save.png';
import Link from './link.png';
import Reward from './money.png';
import Earn from './reward.png';
import Poor from './poor.png';
import Test1 from './testimonial1.png';
import Test2 from './testimonial2.png';
import Test3 from './testimonial3.png';
import { Wiggle } from './keyframes';

//divs and wrappers

export const MainContainerWrapper = Styled.div`
display:flex;
flex-direction:column;
`;

export const WrapperRow = Styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
width: 100%;
justify-content: space-between;
align-items: center;
padding: 3%;
`;

export const WrapperColumnPurple = Styled.div`
display: flex;
flex-direction: Column;
flex-wrap: nowrap;
width: 100%;
margin-top: 5%;
padding: 5% 3%;
justify-content: space-between;
text-align: justify;
text-justify: inter-word;
align-items: center;
background: linear-gradient(19deg, rgba(64,102,176,1) 0%, rgba(0,166,175,1) 98%);
`;

export const WrapperColumnPurple2 = Styled.div`
display: flex;
flex-direction: Column;
flex-wrap: nowrap;
width: 100%;
margin-top: 5%;
padding: 5% 3%;
justify-content: space-between;
text-align: justify;
text-justify: inter-word;
align-items: center;
background: linear-gradient(19deg, rgba(236,183,219,1) 0%, rgba(145,194,222,1) 68%);
`;

export const WrapperColumn = Styled.div`
display: flex;
flex-direction: Column;
flex-wrap: nowrap;
width: 100%;
padding: 5% 3%;
justify-content: space-between;
text-align: justify;
text-justify: inter-word;
align-items: center;
`;

export const FlexDiv = Styled.div`
display: flex;
width: 80%;
flex-direction:column;
justify-content:center;
align-items:center;
`;

export const TestimonialDiv = Styled.div`
display: flex;
flex-direction: Column;
flex-wrap: nowrap;
justify-content: center;
align-items:center;
border: .5 solid lightgray;
box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.14), 0 2px 3px rgba(0, 0, 0, 0.2);
padding: 5%;
margin: 8% 0;
`;

export const Footer = Styled.div`
display: flex;
background: Black;
color: white;
justify-content:center;
padding: 3%;

`;

//Text

export const Header = Styled.h2`
color:white;
font-size: 2rem;
font-weight: 600;
`;

export const HeaderPurple = Styled.h2`
color:#c01089;
font-size: 2.2rem;
font-weight: 600;
`;

export const HeaderBlue = Styled.h2`
color:#4066b0;
font-size: 2.1rem;
font-weight: 600;
`;

export const HeaderBlue2 = Styled.h2`
color:#4066b0;
font-size: 1.8rem;
font-weight: 600;
`;

export const Header3 = Styled.h3`
color:black;
font-size: 1.8rem;
font-weight: 600;
`;

export const Para = Styled.p`
color:white;
text-align: justify;
text-justify: inter-word;
font-size: 1.5rem;
`;

export const ParaPurp = Styled.p`
color:#c01089;
text-align: justify;
text-justify: inter-word;
font-size: 1.5rem;
`;

export const ParaBlue = Styled.p`
color:#4066b0;
text-align: justify;
text-justify: inter-word;
font-size: 1.5rem;
`;

export const ParaBlack = Styled.p`
color:black;
font-size: 1.5rem;
`;

export const Captions = Styled.p`
color:black;
font-size: 1rem;
`;

//Buttons

export const LoginButton = Styled.button`
display:flex;
background-color: #4066b0;
border-radius: 25px;
color: white;
align-content:center;
justify-content: center;
font-size: 1.5rem;
font-weight:600;
padding: 3%;
width: 30%;
`;

//Images

export const MainLogo = Styled.img.attrs({
  src: Logo,
})`
display:flex;
width: 40%;
`;

export const PiggyBank = Styled.img.attrs({
  src: Save,
})`
display:flex;
width: 40%;
margin: 5% 0;
animation: ${Wiggle} 0.9s both;
`;

export const LinkImg = Styled.img.attrs({
  src: Link,
})`
display:flex;
margin-right: 5%;
width: 40%;
`;

export const EarnImg = Styled.img.attrs({
  src: Earn,
})`
display:flex;
margin-left: 6%;
width: 40%;
`;

export const RewardImg = Styled.img.attrs({
  src: Reward,
})`
display:flex;
margin-right: 5%;
width: 40%;
`;

export const BrokeImg = Styled.img.attrs({
  src: Poor,
})`
display:flex;
width:40%
`;

export const Testimonial1 = Styled.img.attrs({
  src: Test1,
})`
display:flex;
margin: 5% 0;
width: 125px;
border-radius: 75px;
box-shadow: 5px 5px 5px 0px rgba(173,173,173,1);
`;

export const Testimonial2 = Styled.img.attrs({
  src: Test2,
})`
display:flex;
margin: 5% 0;
width: 125px;
border-radius: 75px;
box-shadow: 5px 5px 5px 0px rgba(173,173,173,1);
`;

export const Testimonial3 = Styled.img.attrs({
  src: Test3,
})`
display:flex;
margin: 5% 0;
height: 120px;
width: auto;
border-radius: 1540px;
box-shadow: 5px 5px 5px 0px rgba(173,173,173,1);
`;

//other

export const TitleDivider = Styled.hr`
color: #708090;
width:100%;
`;

export const TitleDivider2 = Styled.hr`
color: #708090;
width:80%;
`;
