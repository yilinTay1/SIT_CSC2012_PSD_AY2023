import Head from 'next/head';
import { Box, Container, Grid, Link } from '@mui/material';
import { TotalOrder } from '../components/business/dashboard/totalOrder';
import { LatestOrders } from '../components/business/dashboard/latestOrders';
import { LatestListings } from '../components/business/dashboard/latestListings';
import { LatestSales } from '../components/business/dashboard/latestSales';
import { OrderPending } from '../components/business/dashboard/orderPending';
import { OrderCompleted } from '../components/business/dashboard/orderCompleted';
import { TotalProfit } from '../components/business/dashboard/totalProfit';
import { OrderStatus } from '../components/business/dashboard/orderStatus';
import { DashboardLayout } from '../components/business/dashboard-layout';
import { Test } from '../components/business/dashboard/test';
import React, { useRef , useEffect } from 'react'

const Page = () => {

  const runOnce = useRef(true)
  useEffect( () =>
  {
      if( runOnce.current )
      {
          runOnce.current = false
          console.log("/")
      }
  },[runOnce])

  return(
    window.location.href = '/customer/home'
  )
};

export default Page;
