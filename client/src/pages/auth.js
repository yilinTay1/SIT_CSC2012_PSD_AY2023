import '../config/firebase-config';
import { getAuth , EmailAuthProvider , signInWithEmailAndPassword } from 'firebase/auth'
import React, { useRef , useState , useEffect }   from 'react'

import Head from 'next/head';
import NextLink from 'next/link';
import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';


export default function Auth()
{
    const [email    , setEmail   ] = useState('test@test.com');
    const [password , setPassword] = useState('123456');

    const provider = new EmailAuthProvider()
    const auth     = getAuth();

    function signInwithEmail(e) {
                                    e.preventDefault()
                                    signInWithEmailAndPassword( auth , email , password )
                                                .then((result) => {
                                                                        const end_point = 'http://localhost:5000/api/authenticate'
                                                                        const request_headers = {
                                                                                                    method : 'POST',
                                                                                                    headers : {
                                                                                                                'Content-Type' : 'application/json'
                                                                                                              },
                                                                                                    body : JSON.stringify(
                                                                                                                            { 
                                                                                                                                email    : email , 
                                                                                                                                password : password,
                                                                                                                                oAuth    : result, 
                                                                                                                            }
                                                                                                                         )
                                                                                                }
                                                                        fetch( end_point , request_headers )
                                                                            .then(  response => response.json()       )
                                                                            .then(  response => console.log(response) )
                                                                            .catch( err      => console.log(err)      )
                                                                  })
                                                .catch((error) => {
                                                                        console.log(error)
                                                                  })
                               }
    return(   
            <>
                <Head>
                    <title>Login | Material Kit</title>
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
                    <form onSubmit={signInwithEmail}>
                        <Box sx={{ my: 3 }}>
                        <Typography
                            color="textPrimary"
                            variant="h4"
                        >
                            Sign in
                        </Typography>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                            variant="body2"
                        >
                            Sign in onto WorthEats
                        </Typography>
                        </Box>

                        <TextField
                        id='email'
                        fullWidth
                        label="Email Address"
                        margin="normal"
                        name="email"
                        onChange={ (e) => setEmail(e.target.value) }
                        type="email"
                        value={email}
                        variant="outlined"
                        />
                        <TextField
                        id='password'
                        fullWidth
                        label="Password"
                        margin="normal"
                        name="password"
                        onChange={ (e) => setPassword(e.target.value) }
                        type="password"
                        value={password}
                        variant="outlined"
                        />
                        <Box sx={{ py: 2 }}>
                        <Button
                            color="primary"
                            fullWidth
                            size="large"
                            type="submit"
                            variant="contained"
                        >
                            Sign In Now
                        </Button>
                        </Box>
                        <Typography
                        color="textSecondary"
                        variant="body2"
                        >
                        Don&apos;t have an account?
                        {' '}
                        <NextLink
                            href="/register"
                        >
                            <Link
                            to="/register"
                            variant="subtitle2"
                            underline="hover"
                            sx={{
                                cursor: 'pointer'
                            }}
                            >
                            Sign Up
                            </Link>
                        </NextLink>
                        </Typography>
                    </form>
                    </Container>
                </Box>
            </>
          )
}