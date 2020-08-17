import React from 'react';
import {
  MainContainerWrapper,
  LoginButton,
  WrapperRow,
  WrapperColumn,
  WrapperColumnPurple,
  WrapperColumnPurple2,
  MainLogo,
  FlexDiv,
  Para,
  ParaBlue,
  ParaBlack,
  Header,
  HeaderPurple,
  HeaderBlue,
  HeaderBlue2,
  Header3,
  PiggyBank,
  EarnImg,
  LinkImg,
  RewardImg,
  TitleDivider,
  TitleDivider2,
  BrokeImg,
  Testimonial1,
  Testimonial2,
  Testimonial3,
  TestimonialDiv,
  Captions,
  Footer,
} from './style';

const LandingPage = () => {
  return (
    <>
      <MainContainerWrapper>
        {/* Top Header */}
        <WrapperRow>
          <LoginButton>Log In</LoginButton>
          <MainLogo />
        </WrapperRow>

        <WrapperColumnPurple>
          <PiggyBank />
          <Header>
            SaverLife is a nonprofit that helps you build financial security.
          </Header>
          <Para>
            Our mission is to make saving money easier and more rewarding. We
            receive donations to give you cash rewards and prizes for building
            up your rainy day fund!
          </Para>
        </WrapperColumnPurple>
        <WrapperColumn>
          <HeaderPurple>How It Works</HeaderPurple>
          <WrapperRow>
            <LinkImg />
            <FlexDiv>
              <Header3>Link your account</Header3>
              <ParaBlack>
                SaverLife is not a bank and doesn’t touch your money. Link your
                existing bank account where you save.
              </ParaBlack>
            </FlexDiv>
          </WrapperRow>
          <TitleDivider />
          <WrapperRow>
            <FlexDiv>
              <Header3>Earn points</Header3>
              <ParaBlack>
                Earn points as you build your financial health. Read articles,
                use our budgeting tools, and save money.
              </ParaBlack>
            </FlexDiv>
            <EarnImg />
          </WrapperRow>
          <TitleDivider />
          <WrapperRow>
            <RewardImg />
            <FlexDiv>
              <Header3>Get rewarded</Header3>
              <ParaBlack>
                Redeem your points for digital prizes or a chance to win cash!
              </ParaBlack>
            </FlexDiv>
          </WrapperRow>
          <WrapperColumnPurple2>
            <HeaderBlue>Why We're Here</HeaderBlue>
            <BrokeImg />
            <HeaderBlue2>
              4 out of 10 Americans have less than $400 in savings. Millions
              live paycheck to paycheck.*
            </HeaderBlue2>
            <ParaBlue>
              It can be extremely hard to save money when you’re constantly
              paying off debt, medical bills, and other unplanned expenses.
              Especially in a world where everything is screaming ‘buy me, buy
              me, buy me’. SaverLife is here to help you navigate the ins and
              outs of managing your money.
            </ParaBlue>
          </WrapperColumnPurple2>
          <WrapperColumn>
            <HeaderPurple>Testimonials</HeaderPurple>
            <TestimonialDiv>
              <Testimonial1 />
              <TitleDivider2 />
              <ParaBlack>
                "I was so excited when I saw I won! I thought it was a joke at
                first, but I really did win!"
              </ParaBlack>
              <FlexDiv>
                <Captions> -Tracy, $50 winner from Texas</Captions>
              </FlexDiv>
            </TestimonialDiv>
            <TestimonialDiv>
              <Testimonial2 />
              <TitleDivider2 />
              <ParaBlack>
                "I am a walking testimony that the program works, the program is
                real, and you DO save."
              </ParaBlack>
              <FlexDiv>
                <Captions>-Jessica, $5,000 winner from South Carolina</Captions>
              </FlexDiv>
            </TestimonialDiv>
            <TestimonialDiv>
              <Testimonial3 />
              <TitleDivider2 />
              <ParaBlack>
                "I was so excited when I won! I just clicked on it and i
                couldn't believe it. The SaverLife site is really helpful."
              </ParaBlack>
              <FlexDiv>
                <Captions> -Lucinda, $50 winner from Arizona</Captions>
              </FlexDiv>
            </TestimonialDiv>
          </WrapperColumn>
        </WrapperColumn>

        <Footer>
          Icons made by{' '}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </Footer>
      </MainContainerWrapper>
    </>
  );
};

export default LandingPage;
