import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component

import {
  styled
} from '@mui/material/styles';


const VectorImage= 'http://cdn.onlinewebfonts.com/svg/img_83386.png';





const Splash1 = styled("div")({
  backgroundColor: `rgba(144, 14, 2, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `100%`,
  height: `896px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const Background = styled("div")({
  backgroundColor: `rgba(87, 113, 249, 1)`,
  width: `100%`,
  height: `896px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const LogoName = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `65px`,
  letterSpacing: `1.95px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `96px`,
  top: `388px`,
});

const Description = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `18px`,
  letterSpacing: `-0.44999998807907104px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `230px`,
  position: `absolute`,
  left: `92px`,
  top: `466px`,
});

const BtnLarge = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `332px`,
  height: `76px`,
  left: `41px`,
  top: `588px`,
});

const Rectangle15 = styled("div")({
  backgroundColor: `rgba(49, 75, 206, 0.38)`,
  filter: `blur(60px)`,
  borderRadius: `8px`,
  width: `234px`,
  height: `41px`,
  position: `absolute`,
  left: `46px`,
  top: `35px`,
});

const Rectangle16 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `8px`,
  width: `332px`,
  height: `56px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
  textDecoration: `none`,
});

const GetStartedNow = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(87, 113, 249, 1)`,
  fontStyle: `normal`,
  fontFamily: `SF Pro Display`,
  fontWeight: `700`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `100%`,
  textTransform: `none`,
  position: `absolute`,
  left: `98px`,
  top: `19px`,
});

const Logo = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `135.31px`,
  height: `146.78px`,
  left: `140px`,
  top: `217px`,
});

const Group = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `135.31px`,
  height: `112.95px`,
  left: `0px`,
  top: `34px`,
});

const Group1 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `135.31px`,
  height: `112.95px`,
  left: `0px`,
  top: `0px`,
});

const Vector = styled("img")({
  height: `112.95px`,
  width: `135.31px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});






function Splash() {
  return (
    <Splash1>
      <Background>
      </Background>
      <LogoName>
        {`Wallet`}
      </LogoName>
      <Description>
        {`Money Transfer, Wallet,shopping & Dailylife style`}
      </Description>
      <BtnLarge>
        <Rectangle15>
        </Rectangle15>
        <Rectangle16>
        </Rectangle16>
        <GetStartedNow>
        <Link to ="/RegisterPage" style={{ textDecoration: `none`, color: `rgba(87, 113, 249, 1)`}}>{`Get Started Now`}</Link>
        </GetStartedNow>
      </BtnLarge>
      <Logo>
        <Group>
          <Group1>
            <Vector src={VectorImage} loading='lazy' alt={"Vector"}/>
          </Group1>
        </Group>
        
      </Logo>
    </Splash1>);

  }

export default Splash;

  