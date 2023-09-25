import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const LoginContainer = styled("div")({
  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,
  justifyContent: `center`,
  minHeight: `100vh`,
  backgroundColor: `rgba(255, 255, 255, 1)`,
});

const MainHeadline = styled("div")({
  fontSize: `32px`,
  fontWeight: `700`,
  margin: `16px`,
  color: `rgba(21, 25, 64, 1)`,
});

const InputField = styled("div")({
  display: `flex`,
  flexDirection: `column`,
  alignItems: `flex-start`,
  width: `100%`,
  margin: `16px`,
});

const InputLabel = styled("div")({
  color: `rgba(127, 129, 146, 1)`,
  fontSize: `14px`,
  marginBottom: `8px`,
});

const InputElement = styled("input")({
  width: `100%`,
  padding: `12px`,
  borderRadius: `8px`,
  border: `1px solid rgba(151, 151, 151, 1)`,
  fontSize: `14px`,
  color: `rgba(21, 25, 64, 1)`,
});

const LoginButton = styled("button")({
  backgroundColor: `rgba(49, 75, 206, 1)`,
  color: `white`,
  border: `none`,
  borderRadius: `8px`,
  padding: `12px 24px`,
  fontSize: `18px`,
  cursor: `pointer`,
  marginTop: `16px`,
});

function LoginPage() {
  return (
    <LoginContainer>
      <MainHeadline>Login</MainHeadline>
      <InputField>
        <InputLabel>Email Address</InputLabel>
        <InputElement type="email" placeholder="Enter your email address" />
      </InputField>
      <InputField>
        <InputLabel>Password</InputLabel>
        <InputElement type="password" placeholder="Enter your password" />
      </InputField>
      <LoginButton>
        <Link to="/Mainscreen" style={{ textDecoration: `none`, color: `white` }}>
          Login
        </Link>
      </LoginButton>
      <p>Don't have an account? <Link to="/Register">Register</Link></p>
    </LoginContainer>
  );
}

export default LoginPage;
