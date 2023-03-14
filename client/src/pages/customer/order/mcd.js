import Head from "next/head";
import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useRef, useEffect, useState } from "react";
import { SecuredBuy } from '../../../components/firebase/SecuredBuy'

// Import other components
import CustomerNavBar from "../../../components/customer_view/navigation/navbar";
import { Mcd } from "../../../components/customer_view/restaurant/mcd";
import { McdCart } from "../../../components/customer_view/restaurant/addtocart/mcdcart";

const McdOrder = () => {
  const runOnce = useRef(true);
  const [ buyer , setBuyer ] = useState(false)
  useEffect(() => {
    if (runOnce.current) {
      runOnce.current = false;
      const isbuyer = sessionStorage.getItem("buyer")
      if(isbuyer) setBuyer(true)
      console.log("/");
    }
  }, [runOnce]);


  return (
    <>
      {
        buyer &&
        <Head>
        <title>Mcdonald | WorthEats</title>
        </Head>
      }


      {/* Navbar */}
      {
        buyer &&
       <CustomerNavBar />
      }
      {
        buyer &&
              <Box
                component="main"
                sx={{
                  flexGrow: 1,
                  py: 8,
                }}
              >
                <Container maxWidth={false} style={{ paddingLeft: 70, paddingRight: 70 }}>

                  <Mcd />

                  {/* Category */}
                  <Grid container spacing={10}>
                    <Grid item lg={10} sm={6} xl={10} xs={12}>
                      <br></br>
                      {/* <RestCategory /> */}
                    </Grid>
                  </Grid>
                  {/* End of Restaurants Category Component */}
                  <br></br>

                  {/* Best Sellers */}
                  <Grid container spacing={2}>
                    <McdCart />
                    {/* <Grid item> */}
                    {/* <BestSellers /> */}
                    {/* </Grid> */}
                  </Grid>
                  {/* End of Best Sellers Component */}
                </Container>
              </Box>
      }
    </>
  );
};

McdOrder.getLayout = (mcd) => (
  <>
    <SecuredBuy />
    {mcd}
  </>
);

export default McdOrder;
