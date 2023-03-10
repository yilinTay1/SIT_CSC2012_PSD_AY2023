import Head from "next/head";
import NextLink from "next/link";
import Router from "next/router";
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { EmailPassword, Google } from "../../components/firebase/EmailPassword";
import React, { useRef, useState, useEffect } from "react";

// import other components
import CustNavbar from "../../components/customer_view/navigation/navbar";

// Customer Signup Page

// Register Functionalities
const Register = () => {
  // const formik = useFormik({
  //   initialValues: {
  //     email: '',
  //     firstName: '',
  //     lastName: '',
  //     password: '',
  //     policy: false
  //   },
  //   validationSchema: Yup.object({
  //     email: Yup
  //       .string()
  //       .email('Must be a valid email')
  //       .max(255)
  //       .required(
  //         'Email is required'),
  //     firstName: Yup
  //       .string()
  //       .max(255)
  //       .required('First name is required'),
  //     lastName: Yup
  //       .string()
  //       .max(255)
  //       .required('Last name is required'),
  //     password: Yup
  //       .string()
  //       .max(255)
  //       .required('Password is required'),
  //     policy: Yup
  //       .boolean()
  //       .oneOf(
  //         [true],
  //         'This field must be checked'
  //       )
  //   }),
  //   onSubmit: () => {
  //     Router
  //       .push('/')
  //       .catch(console.error);
  //   }
  // });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      console.log("Valid registration!", result);
    } else {
      console.log("Invalid registration!", result);
    }
  }

  // HTML Frontend
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
          {/* <form onSubmit={formik.handleSubmit}> */}
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
              //error={Boolean(formik.touched.firstName && formik.errors.firstName)}
              fullWidth
              //helperText={formik.touched.firstName && formik.errors.firstName}
              label="First Name"
              margin="normal"
              name="firstName"
              //onBlur={formik.handleBlur}
              //onChange={formik.handleChange}
              //value={formik.values.firstName}
              variant="outlined"
            />

            {/* Last Name Text Field */}
            <TextField
              //error={Boolean(formik.touched.lastName && formik.errors.lastName)}
              fullWidth
              //helperText={formik.touched.lastName && formik.errors.lastName}
              label="Last Name"
              margin="normal"
              name="lastName"
              //onBlur={formik.handleBlur}
              //onChange={formik.handleChange}
              //value={formik.values.lastName}
              variant="outlined"
            />

            {/* Email Address Text Field */}
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

            {/* Retype Password Text Field */}
            <TextField
              //error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              //helperText={formik.touched.password && formik.errors.password}
              label="Retype Password"
              margin="normal"
              name="retype_password"
              //onBlur={formik.handleBlur}
              //onChange={formik.handleChange}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              value={password}
              //value={formik.values.password}
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
              <Checkbox
                //checked={formik.values.policy}
                name="policy"
                //onChange={formik.handleChange}
              />
              <Typography color="textSecondary" variant="body2">
                By proceeding, I agree to WorthEats{" "}
                <NextLink href="#" passHref>
                  <Link color="primary" underline="always" variant="subtitle2">
                    Terms and Conditions
                  </Link>
                </NextLink>
              </Typography>
            </Box>
            {/* End of Terms and Conditions Component */}
            {/* {Boolean(formik.touched.policy && formik.errors.policy) && (
              <FormHelperText error>
                {formik.errors.policy}
              </FormHelperText>
            )} */}
            {/* Signup Button Component */}
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                //disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign Up
              </Button>
            </Box>
            {/* End of Signup Button Component */}

            {/* Redirect to Login Component */}
            <Typography color="textSecondary" variant="body2">
              Have an account? {/* Login Link */}
              <NextLink href="/customer/login" passHref>
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