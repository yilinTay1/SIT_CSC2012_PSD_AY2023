import Head from "next/head";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import CustomerNavBar from "../../components/customer_view/navigation/navbar";
import { Notifications } from "../../components/customer_view/settings/notification";
import React, { useRef, useEffect, useState } from "react";
import NextLink from "next/link";
import { firebase_app, firebase_fs } from "../../components/firebase/firebase-config";
import { collection, getDocs, doc, setDoc, addDoc, getDoc } from "firebase/firestore";

const Settings = () => {
  const runOnce = useRef(true);
  const [buyer, setBuyer] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (runOnce.current) {
      runOnce.current = false;
      const isbuyer = sessionStorage.getItem("buyer");
      const uid = sessionStorage.getItem("uid");
      console.log("uid : ", uid);
      if (isbuyer) setBuyer(true);
      if (uid) {
        const customer = doc(firebase_fs, "customers", uid);
        getDoc(customer)
          .then((response) => response.data())
          .then((response) => {
            const { firstName, lastName, email } = response;
            setFirstName(firstName);
            setLastname(lastName);
            setEmail(email);
          })
          .catch((err) => {});
      }
      console.log("/");
    }
  }, [runOnce]);

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
              <div style={{ display: "flex", textAlign: "center" }}>
                <Typography color="textPrimary" variant="h3" style={{ paddingRight: 10 }}>
                  {firstName}
                </Typography>
                <Typography color="textPrimary" variant="h3">
                  {lastname}
                </Typography>
              </div>
              <br></br>
              <Typography color="textPrimary" variant="h5">
                {email}
              </Typography>
              <br></br>
              <NextLink
                href="/customer/change_pwd"
                passHref
                style={{ cursor: "pointer", color: "black", textDecoration: "None" }}
              >
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
