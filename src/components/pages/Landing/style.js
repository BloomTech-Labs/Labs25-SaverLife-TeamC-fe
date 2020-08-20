import Styled from 'styled-components';
import Logo from '../../common/saverlife.png';
import Save from './save.png';
import Linnk from './link.png';
import Reward from './money.png';
import Earn from './reward.png';
import Poor from './poor.png';
import Test1 from './testimonial1.png';
import Test2 from './testimonial2.png';
import Test3 from './testimonial3.png';
import { Wiggle } from './keyframes';
import { Link } from 'react-router-dom';

//divs and wrappers

export const MainContainerWrapper = Styled.div`
display:flex;
flex-direction:column;
  @media (min-device-width: 1600px) 
  and (max-device-width: 2000px) {
    width:50%;
    border: 1px solid lightslategray;
    padding: 1%;
    margin: 0 auto;
  }
    @media (min-device-width: 2500px) 
  and (max-device-width: 3000px) {
    width:30%;
    border: 1px solid lightslategray;
    padding: 1%;
    margin: 0 auto;
  }
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
margin: 12% 0;
padding: 5% 3%;
justify-content: space-between;
text-align: justify;
text-justify: inter-word;
align-items: center;
border: 1px dashed #00a6af;
border-radius: 25px;
box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.14), 0 2px 3px rgba(0, 0, 0, 0.2);
background: rgb(227,184,219);
background: linear-gradient(240deg, rgba(227,184,219,1) 0%, rgba(255,255,255,1) 100%);
  @media (min-width: 600px) {
    border: none;
      }
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
  @media (min-width: 600px) {
    margin: 10% 0;
    width: 50%;
      }
`;

export const TestimonialDiv = Styled.div`
display: flex;
width: 100%;
flex-direction: Column;
flex-wrap: nowrap;
justify-content: center;
align-items:center;
border: .5 solid lightgray;
box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.14), 0 2px 3px rgba(0, 0, 0, 0.2);
padding: 5%;
margin: 8% 0;
background:linear-gradient(83deg, rgba(145,194,222,1) 0%, rgba(255,255,255,1) 54%, rgba(145,194,222,1) 100%);
  @media (min-width: 600px) {
    width: 80%;
      }
`;

export const Footer = Styled.div`
display: flex;
background: Black;
color: white;
justify-content:center;
padding: 3%;
@media (min-width: 800px) {
    font-size: 1.4rem;
    a {
      font-size: 1.4rem;
    }
      }

`;

//Text

export const Header = Styled.h2`
color:white;
font-size: 1.8rem;
font-weight: 600;
  @media (min-width: 600px) {
    font-size: 2rem;
      }
  @media (min-width: 800px) {
    font-size: 3rem;
      }
`;

export const HeaderPurple = Styled.h2`
color:#c01089;
font-size: 2.2rem;
font-weight: 600;
  @media (min-width: 600px) {
    font-size: 2.5rem;
      }
  @media (min-width: 800px) {
    font-size: 3rem;
      }
`;

export const HeaderBlue = Styled.h2`
color:#4066b0;
font-size: 2.1rem;
font-weight: 600;
  @media (min-width: 800px) {
    font-size: 3rem;
      }
`;

export const HeaderBlue2 = Styled.h2`
color:#4066b0;
font-size: 1.8rem;
font-weight: 600;
  @media (min-width: 800px) {
    font-size: 2.8rem;
      }

`;

export const Header3 = Styled.h3`
color:black;
font-size: 1.8rem;
font-weight: 600;
    @media (min-width: 800px) {
    font-size: 2.5rem;
      }
`;

export const Para = Styled.p`
color:white;
text-align: justify;
text-justify: inter-word;
font-size: 1.5rem;
  @media (min-width: 600px) {
    font-size: 1.6rem;
      }
  @media (min-width: 800px) {
    font-size: 2.3rem;
      }
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
@media (min-width: 800px) {
    font-size: 2.3rem;
      }
`;

export const ParaBlack = Styled.p`
color:black;
font-size: 1.5rem;
  @media (min-width: 800px) {
    font-size: 2.3rem;
      }
`;

export const Captions = Styled.p`
color:black;
font-size: 1rem;
@media (min-width: 800px) {
    font-size: 1.4rem;
      }
`;

//Buttons

export const LoginLink = Styled(Link)`
display:flex;
width:40%;
  @media (min-device-width: 2500px) 
  and (max-device-width: 3000px) {
    width: 60%;
    font-size: 1.2rem;
  }
`;

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
width:65%;
  @media (min-width: 600px) {
    border-radius: 60px;
      }
  @media (min-width: 800px) {
    font-size: 2rem;
      }
  @media (min-device-width: 1600px) 
  and (max-device-width: 2000px) {
    width:50%;
    padding: 1%;
    line-height: 2;
    font-size: 1.5rem;
  }
    @media (min-device-width: 2500px) 
  and (max-device-width: 3000px) {
    width: 40%;
    padding: 1%;
    font-size: 1.2rem;
  }
`;

//Images

export const MainLogo = Styled.img.attrs({
  src: Logo,
})`
display:flex;
width: 40%;
 @media (min-device-width: 1600px) 
  and (max-device-width: 2000px) {
    width:30%;
  }
    @media (min-device-width: 2500px) 
  and (max-device-width: 3000px) {
    width: 20%;
  }
`;

export const PiggyBank = Styled.img.attrs({
  src: Save,
})`
display:flex;
width: 40%;
margin: 5% 0;
animation: ${Wiggle} 0.9s both;
 @media (min-device-width: 1600px) 
  and (max-device-width: 2000px) {
    width:25%;
  }
    @media (min-device-width: 2500px) 
  and (max-device-width: 3000px) {
    width: 25%;
  }
`;

export const LinkImg = Styled.img.attrs({
  src: Linnk,
})`
display:flex;
margin-right: 5%;
width: 40%;
  @media (min-width: 1000px) {
    width:30%;
      }
`;

export const EarnImg = Styled.img.attrs({
  src: Earn,
})`
display:flex;
margin-left: 6%;
width: 40%;
  @media (min-width: 1000px) {
    width:30%;
      }
`;

export const RewardImg = Styled.img.attrs({
  src: Reward,
})`
display:flex;
margin-right: 5%;
width: 40%;
  @media (min-width: 1000px) {
    width:30%;
      }
`;

export const BrokeImg = Styled.img.attrs({
  src: Poor,
})`
display:flex;
width:40%;
  @media (min-width: 1000px) {
    width:30%;
      }
`;

export const Testimonial1 = Styled.img.attrs({
  src: Test1,
})`
display:flex;
margin: 5% 0;
width: 125px;
border-radius: 75px;
box-shadow: 5px 5px 5px 0px rgba(173,173,173,1);
  @media (min-width: 600px) {
    width: 180px;
    border-radius: 50%;
      }
`;

export const Testimonial2 = Styled.img.attrs({
  src: Test2,
})`
display:flex;
margin: 5% 0;
width: 125px;
border-radius: 75px;
box-shadow: 5px 5px 5px 0px rgba(173,173,173,1);
  @media (min-width: 600px) {
    width: 180px;
    border-radius: 50%;
      }
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
  @media (min-width: 600px) {
    width: 180px;
    height: auto;
    border-radius: 50%;
      }
`;

//other

export const TitleDivider = Styled.hr`
color: #708090;
width:100%;
`;

export const TitleDivider2 = Styled.hr`
color: #708090;
width:80%;
  @media (min-width: 600px) {
    width: 100%;
      }
`;
