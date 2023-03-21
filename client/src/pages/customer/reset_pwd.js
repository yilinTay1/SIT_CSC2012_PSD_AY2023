import Head from "next/head";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

import { EmailPassword, Google } from "../../components/firebase/EmailPassword";
import React, { useRef, useState, useEffect } from "react";

// Import other components
import CustNavbar from "../../components/customer_view/navigation/navbar";

const ResetPwd = () => {
  const [email, setEmail] = useState("");
  const runOnce = useRef(true);
  useEffect(() => {
    if (runOnce.current) {
      runOnce.current = false;
      const token = sessionStorage.getItem("account");
      if (token) {
        console.log("I am authenticated!");
      } else {
        console.log("I am not authenticated!");
      }
    }
  }, [runOnce]);

  async function passwordReset(e) {
    e.preventDefault();
    if (email != "") {
      const result = EmailPassword.forgotPassword(email);
      if (result) {
        alert("An email was sent to " + email + " with a link to reset password");
        return;
      }
      console.log("Unable to reset password");
    } else {
      console.log("Email cannot be empty");
    }
  }

  return (
    <>
      {/* Header */}
      <Head>
        <title> Reset Password | WorthEats </title>
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
          <form onSubmit={passwordReset}>
            {/* Welcome Text Component (Form Title) */}
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h2">
                Reset Password
              </Typography>

              <Typography color="textSecondary" gutterBottom variant="body3">
                Please enter you registered email address:
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

            {/* Reset Password Button Component */}
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Reset Password
              </Button>
              <Typography color="textSecondary" gutterBottom variant="body3">
                By clicking on the above button, an email will be sent to the above email address
                with a link to reset your password.
              </Typography>
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

export default ResetPwd;
