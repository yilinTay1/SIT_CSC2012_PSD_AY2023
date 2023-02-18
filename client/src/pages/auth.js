import { EmailPassword , Google }  from '../components/firebase-auth/EmailPassword'

import React, { useRef , useState , useEffect }   from 'react'
import Head from 'next/head';
import NextLink from 'next/link';
import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';


export default function Auth()
{
    const [email    , setEmail   ] = useState('test@test.com');
    const [password , setPassword] = useState('123456');

    function signInwithEmail(e) {
                                    e.preventDefault()

                                    EmailPassword.auth(email,password)
                                    Google.auth(password)

                                                  sessionStorage.clear()
                                    let account = sessionStorage.getItem("account")
                                    console.log("Account",account)
                                                  sessionStorage.setItem("account","user 1")
                                        account = sessionStorage.getItem("account")
                                                  
                                    console.log("Account",account)
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