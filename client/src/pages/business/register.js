import Head from 'next/head';
import NextLink from 'next/link';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
import { Box, Button, Checkbox, Container, Link, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { EmailPassword } from '../../components/firebase/EmailPassword';
import React, { useEffect, useRef, useState } from 'react';

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

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      console.log('Valid registration!', result);
    } else {
      console.log('Invalid registration!', result);
    }
  }

  return (
    <>
      <Head>
        <title>
          Register | Material Kit
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="sm">
          <NextLink
            href="/business/login"
            passHref
          >
            <Button
              component="a"
              startIcon={<ArrowBackIcon fontSize="small"/>}
            >
              Login
            </Button>
          </NextLink>
          {/* <form onSubmit={formik.handleSubmit}> */}
          <form onSubmit={registerWithEmail}>
            <Box sx={{ my: 3 }}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                Create a new account
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                Use your email to create a new account
              </Typography>
            </Box>
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
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                ml: -1
              }}
            >
              <Checkbox
                //checked={formik.values.policy}
                name="policy"
                //onChange={formik.handleChange}
              />
              <Typography
                color="textSecondary"
                variant="body2"
              >
                I have read the
                {' '}
                <NextLink
                  href="#"
                  passHref
                >
                  <Link
                    color="primary"
                    underline="always"
                    variant="subtitle2"
                  >
                    Terms and Conditions
                  </Link>
                </NextLink>
              </Typography>
            </Box>
            {/* {Boolean(formik.touched.policy && formik.errors.policy) && (
              <FormHelperText error>
                {formik.errors.policy}
              </FormHelperText>
            )} */}
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                //disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign Up Now
              </Button>
            </Box>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Have an account?
              {' '}
              <NextLink
                href="/business/login"
                passHref
              >
                <Link
                  variant="subtitle2"
                  underline="hover"
                >
                  Sign In
                </Link>
              </NextLink>
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Register;
