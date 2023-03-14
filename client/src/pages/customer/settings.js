import Head from "next/head";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import CustomerNavBar from "../../components/customer_view/navigation/navbar";
import { Notifications } from "../../components/customer_view/settings/notification";
import React, { useRef, useEffect, useState } from "react";
import NextLink from "next/link";

const Settings = () => {
  const runOnce = useRef(true);
  const [buyer, setBuyer] = useState(false);
  useEffect(() => {
    if (runOnce.current) {
      runOnce.current = false;
      const isbuyer = sessionStorage.getItem("buyer");
      if (isbuyer) setBuyer(true);
      console.log("/");
    }
  }, [runOnce]);

  //   useEffect(() => {
  //     if (runOnce.current) {
  //       runOnce.current = false;
  //       console.log("Settings");
  //     }
  //   }, [runOnce]);

  return (
    <>
      {buyer && (
        <Head>
          <title>Customer Settings | WorthEats</title>
        </Head>
      )}
      {/* Navbar */}
      {buyer && <CustomerNavBar />}
      {buyer && (
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 8,
          }}
        >
          <Container maxWidth="lg">
            <Box sx={{ pt: 3 }}>
              <Grid container spacing={2}>
                <Typography color="textPrimary" variant="h3" style={{ paddingRight: 20 }}>
                  First Name
                </Typography>
                <Typography color="textPrimary" variant="h3">
                  Last Name
                </Typography>
              </Grid>
              <br></br>
              <Typography color="textPrimary" variant="h5">
                Email Address
              </Typography>
              <br></br>
              <NextLink href="/customer/change_pwd" passHref>
                <Button color="primary" variant="contained">
                  Change Password
                </Button>
              </NextLink>
            </Box>
            <Notifications />
          </Container>
        </Box>
      )}
    </>
  );
};

export default Settings;
