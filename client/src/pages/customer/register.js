import Head from "next/head";
import NextLink from "next/link";
import Router from "next/router";

import { Box, Button, Checkbox, Container, Link, TextField, Typography } from "@mui/material";

import { EmailPassword, Google } from "../../components/firebase/EmailPassword";
import { firebase_app, firebase_fs } from "../../components/firebase/firebase-config";
import { collection, getDocs, doc, setDoc, addDoc, getDoc } from "firebase/firestore";
import React, { useRef, useState, useEffect } from "react";

// Import other components
import CustNavbar from "../../components/customer_view/navigation/navbar";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const runOnce = useRef(true);
  useEffect(() => {
    if (runOnce.current) {
      runOnce.current = false;
    }
  }, [runOnce]);

  async function registerWithEmail(e) {
    e.preventDefault();
    const result = await EmailPassword.register(email, password);
    if (result) {
      const uid = sessionStorage.getItem("uid");
      if (uid) {
        console.log(uid, firstName, lastName);
        const credentials = {
          firstName: firstName,
          lastName: lastName,
          email: email,
        };
        const customer = doc(firebase_fs, "customers", uid);
        setDoc(customer, credentials)
          .then((response) => {
            console.log("Added to FireStore : ", firstName, lastName);
          })
          .catch((err) => {});

        sessionStorage.setItem("uid", null);
      }
      console.log("Valid registration!", result);
      Router.push("/customer/login").catch(console.error);
    } else {
      console.log("Invalid registration!", result);
    }
  }

  return (
    <>
      {/* Header */}
      <Head>
        <title> Register | WorthEats </title>
      </Head>

      {/* Navbar */}
      <CustNavbar />

      {/* Signup Component */}
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        {/* Signup Container */}
        <Container
          maxWidth="lg"
          style={{
            height: "1000px",
          }}
        >
          {/* Signup Form */}
          <form onSubmit={registerWithEmail}>
            {/* Signup Form Title Component */}
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h2">
                Create a new account
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body3">
                For faster ordering and easier tracking
              </Typography>
            </Box>
            {/* End of Signup Form Title Component */}

            {/* First Name Text Field */}
            <TextField
              fullWidth
              label="First Name"
              margin="normal"
              name="firstName"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              variant="outlined"
            />

            {/* Last Name Text Field */}
            <TextField
              fullWidth
              label="Last Name"
              margin="normal"
              name="lastName"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              variant="outlined"
            />

            {/* Email Address Text Field */}
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

            {/* Password Text Field */}
            <TextField
              fullWidth
              label="Password"
              margin="normal"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              value={password}
              variant="outlined"
            />

            {/* Terms and Conditions Component */}
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                ml: -1,
              }}
            >
              <Checkbox name="policy" />
              <Typography color="textSecondary" variant="body2">
                By proceeding, I agree to WorthEats{" "}
                <NextLink href="#" passHref style={{ cursor: "pointer", textDecoration: "None" }}>
                  <Link color="primary" underline="hover" variant="subtitle2">
                    Terms and Conditions
                  </Link>
                </NextLink>
              </Typography>
            </Box>
            {/* End of Terms and Conditions Component */}

            {/* Signup Button Component */}
            <Box sx={{ py: 2 }}>
              <Button color="primary" fullWidth size="large" type="submit" variant="contained">
                Sign Up
              </Button>
            </Box>
            {/* End of Signup Button Component */}

            {/* Redirect to Login Component */}
            <Typography color="textSecondary" variant="body2">
              Have an account? {/* Login Link */}
              <NextLink
                href="/customer/login"
                passHref
                style={{ cursor: "pointer", textDecoration: "None" }}
              >
                <Link variant="subtitle2" underline="hover">
                  Sign In
                </Link>
              </NextLink>
              {/* End of Login Link */}
            </Typography>
          </form>
          {/* End of Signup Form */}
        </Container>
        {/* End of Signup Component */}
      </Box>
      {/* End of Signup Component */}
    </>
  );
};

export default Register;
