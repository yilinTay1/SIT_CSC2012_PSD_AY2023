import Head from "next/head";
import NextLink from "next/link";
import Router from "next/router";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
  Divider,
  Chip,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Facebook as FacebookIcon } from "../../icons/facebook";
import { Google as GoogleIcon } from "../../icons/google";

import { EmailPassword, Google } from "../../components/firebase/EmailPassword";
import React, { useRef, useState, useEffect } from "react";

// Import other components
import CustNavbar from "../../components/customer_view/navigation/navbar";
import { DashboardLayout } from '../../components/customer_view/dashboard-layout';

// Customer Login Page

// Login Functionalities
const Login = () => {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("123456");
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

  async function signInwithEmail(e) {
    e.preventDefault();
    const result = await EmailPassword.auth(email, password);
    if (result) {
      sessionStorage.setItem("account", email);
      console.log("Redirecting...");
      window.location.href = "/";
    }
    console.log("Unable to authenticate");
  }

  // HTML Frontend
  return (
    <>
      {/* Header */}
      <Head>
        <title> Login | WorthEats </title>
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
          {/* <form onSubmit={formik.handleSubmit}> */}
          <form onSubmit={signInwithEmail}>
            {/* Welcome Text Component (Form Title) */}
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h2">
                Welcome!
              </Typography>

              <Typography color="textSecondary" gutterBottom variant="body3">
                Sign in to start ordering!
              </Typography>
            </Box>
            {/* End of Welcome Text Component */}

            {/* Email Text Field */}
            <TextField
              //error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              //helperText={formik.touched.email && formik.errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              //onBlur={formik.handleBlur}
              //onChange={formik.handleChange}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              //value={formik.values.email}
              variant="outlined"
            />

            {/* Password Text Field */}
            <TextField
              //error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              //helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              //onBlur={formik.handleBlur}
              //onChange={formik.handleChange}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              value={password}
              //value={formik.values.password}
              variant="outlined"
            />

            {/* Forgot Password */}
            <Typography
              color="textSecondary"
              variant="body2"
            >
              {/* Insert Forget Password Link */}
              <NextLink href="/customer/reset_pwd">
                <Link
                  to="/customer/reset_pwd"
                  variant="subtitle2"
                  underline="hover"
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  Forgot Password?
                </Link>
              </NextLink>
              {/* End of Sign Up Link */}
            </Typography>


            {/* Sign In Button Component */}
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                //disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign In
              </Button>
            </Box>

            <Divider color="textSecondary" variant="body2">
              <Chip label="OR" />
            </Divider>

            {/* Socials Sign In Component */}
            <Grid
              container
              spacing={3}
              sx={{
                pb: 1,
                pt: 3,
              }}
            >
              {/* Facebook Sign In Component */}
              <Grid item xs={12} md={6}>
                <Button
                  color="info"
                  fullWidth
                  startIcon={<FacebookIcon />}
                  //onClick={() => formik.handleSubmit()}
                  size="large"
                  variant="contained"
                  style={{
                    padding: 15,
                    borderRadius: 50,
                  }}
                ></Button>
              </Grid>
              {/* Google Sign In Component */}
              <Grid item xs={12} md={6}>
                <Button
                  color="error"
                  fullWidth
                  //onClick={() => formik.handleSubmit()}
                  size="large"
                  startIcon={<GoogleIcon />}
                  variant="contained"
                  style={{
                    padding: 15,
                    borderRadius: 50,
                  }}
                ></Button>
              </Grid>
            </Grid>
            {/* End of Socials Sign In Component */}

            {/* Redirect to Sign Up Component */}
            <Typography
              color="textSecondary"
              variant="body2"
              sx={{
                pb: 1,
                pt: 3,
              }}
            >
              Don&apos;t have an account? {/* Sign Up Link */}
              <NextLink href="/customer/register">
                <Link
                  to="/customer/register"
                  variant="subtitle2"
                  underline="hover"
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  Sign Up
                </Link>
              </NextLink>
              {/* End of Sign Up Link */}
            </Typography>
          </form>
          {/* End of Login Form */}
        </Container>
        {/* End of Login Container */}
      </Box>
      {/* End of Login Component */}
    </>
  );
};

Login.getLayout = (page) => (
  <DashboardLayout>
    {/* <Secured /> */}
    {page}
  </DashboardLayout>
);

export default Login;
