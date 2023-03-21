import Head from "next/head";
import Router from "next/router";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

import { EmailPassword, Google } from "../../components/firebase/EmailPassword";
import React, { useRef, useState, useEffect } from "react";

// Import other components
import CustNavbar from "../../components/customer_view/navigation/navbar";

const ChangePwd = () => {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [password3, setPassword3] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const runOnce = useRef(true);
  useEffect(() => {
    if (runOnce.current) {
      runOnce.current = false;
      const token = sessionStorage.getItem("account");
      const email = sessionStorage.getItem("email");
      if (token) {
        console.log("I am authenticated!");
        setIsAuth(true);
        if (email) setEmail(email);
      } else {
        console.log("I am not authenticated!");
      }
    }
  }, [runOnce]);

  async function changePassword(e) {
    e.preventDefault();
    if (email != "" && password2 == password3) {
      const token = sessionStorage.getItem("account");
      if (token) {
        const result = await EmailPassword.changePassword(email, password2);
        if (result) {
          Router.push("/customer/home").catch(console.error);
          return;
        }
        console.log("Unable to authenticate");
      } else {
        const result = await EmailPassword.auth(email, password1);
        if (result) {
          sessionStorage.setItem("buyer", sessionStorage.getItem("uid"));
          const result2 = await EmailPassword.changePassword(email, password2);
          if (result2) {
            Router.push("/customer/home").catch(console.error);
            return;
          } else {
            console.log("Password change failed");
          }
        } else {
          console.log("Unable to authenticate");
        }
      }
    }
  }

  return (
    <>
      {/* Header */}
      <Head>
        <title> Change Password | WorthEats </title>
      </Head>

      {/* Navbar */}
      <CustNavbar />

      {/* Login Component */}
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        {/* Login Container */}
        <Container
          maxWidth="lg"
          style={{
            height: "1000px",
          }}
        >
          {/* Login Form */}
          <form onSubmit={changePassword}>
            {/* Welcome Text Component (Form Title) */}
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h2">
                Change Password
              </Typography>

              <Typography color="textSecondary" gutterBottom variant="body3">
                Fill in your registered email, old password and new password:
              </Typography>
            </Box>
            {/* End of Welcome Text Component */}

            {/* Email Text Field */}
            <TextField
              fullWidth
              label="Email Address"
              margin="normal"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              variant="outlined"
            />

            {/* Old Password Text Field */}
            {!isAuth && (
              <TextField
                fullWidth
                label="Old Password"
                margin="normal"
                name="password"
                onChange={(e) => setPassword1(e.target.value)}
                type="password"
                value={password1}
                variant="outlined"
              />
            )}

            {/* New Password Text Field */}
            <TextField
              fullWidth
              label="New Password"
              margin="normal"
              name="password"
              onChange={(e) => setPassword2(e.target.value)}
              type="password"
              value={password2}
              variant="outlined"
            />

            {/* Retype New Password Text Field */}
            <TextField
              fullWidth
              label="Retype New Password"
              margin="normal"
              name="password"
              onChange={(e) => setPassword3(e.target.value)}
              type="password"
              value={password3}
              variant="outlined"
            />

            {/* Reset Password Button Component */}
            <Box sx={{ py: 2 }}>
              <Button color="primary" fullWidth size="large" type="submit" variant="contained">
                Change Password
              </Button>
            </Box>
          </form>
          {/* End of Login Form */}
        </Container>
        {/* End of Login Container */}
      </Box>
      {/* End of Login Component */}
    </>
  );
};

export default ChangePwd;
