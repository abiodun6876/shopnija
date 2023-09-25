import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const CreateAccountContainer = styled("div")({
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

const RegisterButton = styled("button")({
  backgroundColor: `rgba(87, 113, 249, 1)`,
  color: `white`,
  border: `none`,
  borderRadius: `8px`,
  padding: `12px 24px`,
  fontSize: `18px`,
  cursor: `pointer`,
  marginTop: `16px`,
});

function RegisterPage() {
  return (
    <CreateAccountContainer>
      <MainHeadline>Register</MainHeadline>
      <InputField>
        <InputLabel>Full Name</InputLabel>
        <InputElement type="text" placeholder="Enter your full name" />
      </InputField>
      <InputField>
        <InputLabel>Email Address</InputLabel>
        <InputElement type="email" placeholder="Enter your email address" />
      </InputField>
      <InputField>
        <InputLabel>Password</InputLabel>
        <InputElement type="password" placeholder="Enter your password" />
      </InputField>
      <InputField>
        <InputLabel>Confirm Password</InputLabel>
        <InputElement type="password" placeholder="Confirm your password" />
      </InputField>
      <RegisterButton>
        <Link to="/LoginPage" style={{ textDecoration: `none`, color: `white` }}>
          Register
        </Link>
      </RegisterButton>
      <p>Already have an account? <Link to="/Login">Login</Link></p>
    </CreateAccountContainer>
  );
}

export default RegisterPage;
