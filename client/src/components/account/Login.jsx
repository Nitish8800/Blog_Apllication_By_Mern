import React from "react";

import { Box, TextField, Button, Typography, styled } from "@mui/material";

const Login = () => {
  const imageURL =
    "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";

  return (
    <div>
      <Box>
        <img src={imageURL} alt="blog image" />

        <TextField
          variant="standard"
          //   value={login.username}
          //   onChange={(e) => onValueChange(e)}
          name="username"
          label="Enter Username"
        />
        <TextField
          variant="standard"
          //   value={login.password}
          //   onChange={(e) => onValueChange(e)}
          name="password"
          label="Enter Password"
        />
      </Box>
    </div>
  );
};

export default Login;
