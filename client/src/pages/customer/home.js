import Head from "next/head";
import { Box, Container, Grid, Typography } from "@mui/material";
import { TotalOrder } from "../../components/dashboard/totalOrder";
import { LatestOrders } from "../../components/dashboard/latest-orders";
import { LatestProducts } from "../../components/dashboard/latest-products";
import { Sales } from "../../components/dashboard/sales";
import { OrderPending } from "../../components/dashboard/orderPending";
import { CompleteOrder } from "../../components/dashboard/completeOrder";
import { TotalProfit } from "../../components/dashboard/total-profit";
import { OrderStatus } from "../../components/dashboard/orderStatus";
import { DashboardLayout } from "../../components/dashboard-layout";
import { Test } from "../../components/dashboard/test";
import { Secured } from "../../components/firebase/Secured";
import React, { useRef, useEffect } from "react";

const Home = () => {
  const runOnce = useRef(true);
  useEffect(() => {
    if (runOnce.current) {
      runOnce.current = false;
      console.log("/");
    }
  }, [runOnce]);

  return (
    <>
      <Head>
        <title>Dashboard | WorthEats</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <Typography color="textPrimary" variant="h2">
            Welcome to customer page!
          </Typography>
        </Container>
      </Box>
    </>
  );
};

Home.getLayout = (home) => (
  <DashboardLayout>
    {/* <Secured /> */}
    {home}
  </DashboardLayout>
);

export default Home;
