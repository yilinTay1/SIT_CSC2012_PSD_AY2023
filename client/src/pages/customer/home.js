import Head from "next/head";
import { Box, Container, Grid, Typography } from "@mui/material";
import { TotalOrder } from "../../components/business/dashboard/totalOrder";
import { LatestOrders } from "../../components/business/dashboard/latest-orders";
import { LatestProducts } from "../../components/business/dashboard/latest-products";
import { Sales } from "../../components/business/dashboard/sales";
import { OrderPending } from "../../components/business/dashboard/orderPending";
import { CompleteOrder } from "../../components/business/dashboard/completeOrder";
import { TotalProfit } from "../../components/business/dashboard/total-profit";
import { OrderStatus } from "../../components/business/dashboard/orderStatus";
import { DashboardLayout } from "../../components/business/dashboard-layout";
import { Test } from "../../components/business/dashboard/test";
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
