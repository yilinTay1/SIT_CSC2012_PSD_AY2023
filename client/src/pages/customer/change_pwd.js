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

// Customer Reset Password Page

// NEED HELP:
// Authenticate email and Update new password for that email

// Reset Password Functionalities (NEED HELP: Authenticate email, Update new password)
const ChangePwd = () => {
  const [email    , setEmail    ] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [password3, setPassword3] = useState("");
  const [isAuth   , setIsAuth   ] = useState(false);
  const runOnce = useRef(true);
  useEffect(() => {
    if (runOnce.current) {
      runOnce.current = false;
      const token = sessionStorage.getItem("account");
      const email = sessionStorage.getItem("email");
      if (token) {
        console.log("I am authenticated!");
        setIsAuth(true)
        if(email) setEmail(email);
      } else {
        console.log("I am not authenticated!");
      }
    }
  }, [runOnce]);

  // NEED HELP: need to change to authenticate email
  async function changePassword(e) 
  {
    e.preventDefault();
    if( (email != "") && (password2 == password3) )
    {
        const token = sessionStorage.getItem("account");
        if( token )
        {
            const result = await EmailPassword.changePassword(email, password2);
            if (result) 
            {
              Router
                .push("/customer/home")
                .catch(console.error)
              return
            }
            console.log("Unable to authenticate");
        }
        else
        {
          const result = await EmailPassword.auth(email, password1);
          if(result)
          {
            sessionStorage.setItem( "buyer" , sessionStorage.getItem("uid")  )
            const result2 = await EmailPassword.changePassword(email, password2);
            if (result2) 
            {
              Router
                .push("/customer/home")
                .catch(console.error)
                return
            }
            else
            {
              console.log("Password change failed")
            }
          }
          else
          {
            console.log("Unable to authenticate");
          }
        }
    }
  }

  // NEED HELP: Update and change password function

  // HTML Frontend
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
          {/* <form onSubmit={formik.handleSubmit}> */}
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

            {/* Old Password Text Field */}
            {
              !isAuth &&
                      <TextField
                      //error={Boolean(formik.touched.password && formik.errors.password)}
                      fullWidth
                      //helperText={formik.touched.password && formik.errors.password}
                      label="Old Password"
                      margin="normal"
                      name="password"
                      //onBlur={formik.handleBlur}
                      //onChange={formik.handleChange}
                      onChange={(e) => setPassword1(e.target.value)}
                      type="password"
                      value={password1}
                      //value={formik.values.password}
                      variant="outlined"
                    />
            }


            {/* New Password Text Field */}
            <TextField
              //error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              //helperText={formik.touched.password && formik.errors.password}
              label="New Password"
              margin="normal"
              name="password"
              //onBlur={formik.handleBlur}
              //onChange={formik.handleChange}
              onChange={(e) => setPassword2(e.target.value)}
              type="password"
              value={password2}
              //value={formik.values.password}
              variant="outlined"
            />

            {/* Retype New Password Text Field */}
            <TextField
              //error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              //helperText={formik.touched.password && formik.errors.password}
              label="Retype New Password"
              margin="normal"
              name="password"
              //onBlur={formik.handleBlur}
              //onChange={formik.handleChange}
              onChange={(e) => setPassword3(e.target.value)}
              type="password"
              value={password3}
              //value={formik.values.password}
              variant="outlined"
            />

            {/* Reset Password Button Component */}
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                //disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
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
