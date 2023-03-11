import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { TotalOrder } from '../../components/business/dashboard/totalOrder';
import { LatestOrders } from '../../components/business/dashboard/latestOrders';
import { LatestListings } from '../../components/business/dashboard/latestListings';
import { LatestSales } from '../../components/business/dashboard/latestSales';
import { OrderPending } from '../../components/business/dashboard/orderPending';
import { OrderCompleted } from '../../components/business/dashboard/orderCompleted';
import { TotalProfit } from '../../components/business/dashboard/totalProfit';
import { OrderStatus } from '../../components/business/dashboard/orderStatus';
import { DashboardLayout } from '../../components/business/dashboard-layout';
import { Test } from '../../components/business/dashboard/test';
import { SecuredBiz } from '../../components/firebase/SecuredBiz'
import React, { useRef , useEffect } from 'react'

const Page = () => {

  const runOnce = useRef(true)
  useEffect( () =>
  {
    if( runOnce.current )
    {
      runOnce.current = false
      console.log("/dashboard")
    }
  },[runOnce])

  return(
    <>
      <Head>
        <title>
          Dashboard | WorthEats
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth={false}>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <TotalOrder />
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              sm={6}
              xs={12}
            >
              <OrderCompleted />
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              sm={6}
              xs={12}
            >
              <OrderPending />
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              sm={6}
              xs={12}
            >
              <TotalProfit sx={{ height: '100%' }} />
            </Grid>
            <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            >
              <LatestSales />
            </Grid>
            <Grid
              item
              lg={4}
              md={6}
              xl={3}
              xs={12}
            >
              <OrderStatus sx={{ height: '100%' }} />
            </Grid>
            <Grid
              item
              lg={12}
              md={18}
              xl={18}
              xs={12}
            >
              <LatestListings sx={{ height: '100%' }} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
};

Page.getLayout = (page) => (
  <DashboardLayout>
    <SecuredBiz />
    {page}
  </DashboardLayout>
);

export default Page;
