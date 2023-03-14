import Head from "next/head";
import { Box, Button, Container, Typography } from "@mui/material";
import CustomerNavBar from "../../components/customer_view/navigation/navbar";
import { Notifications } from "../../components/customer_view/settings/notification";
import React, { useRef, useEffect, useState } from "react";

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
            <Notifications />
            <Box sx={{ pt: 3 }}>
              <Button color="primary" variant="contained">
                Save
              </Button>
            </Box>
          </Container>
        </Box>
      )}
    </>
  );
};

export default Settings;
