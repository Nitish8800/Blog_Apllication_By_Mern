import React from "react";

import { Box, TextField, Button, Typography, styled } from "@mui/material";

{
  /* <>-------------    Add CSS in Element               ---------------</> */
}

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

const Image = styled("img")({
  width: 100,
  display: "flex",
  margin: "auto",
  padding: "50px 0 0",
});

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  overflow: auto;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const SignupButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 14px;
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

{
  /* <>-------------    Add CSS in Element               ---------------</> */
}

const loginInitialValues = {
  username: "",
  password: "",
};

const signupInitialValues = {
  name: "",
  username: "",
  password: "",
};

const Login = () => {
  const imageURL =
    "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";

  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="blog image" />
        <Wrapper>
          <TextField
            color="primary"
            variant="outlined"
            //   value={login.username}
            //   onChange={(e) => onValueChange(e)}
            name="username"
            label="Enter Username"
          />
          <TextField
            color="secondary"
            variant="outlined"
            //   value={login.password}
            //   onChange={(e) => onValueChange(e)}
            name="password"
            label="Enter Password"
          />

          <LoginButton variant="contained">Login</LoginButton>
          <Text style={{ textAlign: "center" }}>OR</Text>
          <SignupButton>Create an account</SignupButton>
        </Wrapper>
      </Box>
    </Component>
  );
};

export default Login;
