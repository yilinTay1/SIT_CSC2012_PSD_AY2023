import Head from 'next/head';
import { Box, Container, Grid, Link } from '@mui/material';
import { TotalOrder } from '../components/dashboard/totalOrder';
import { LatestOrders } from '../components/dashboard/latestOrders';
import { LatestListings } from '../components/dashboard/latestListings';
import { LatestSales } from '../components/dashboard/latestSales';
import { OrderPending } from '../components/dashboard/orderPending';
import { OrderCompleted } from '../components/dashboard/orderCompleted';
import { TotalProfit } from '../components/dashboard/totalProfit';
import { OrderStatus } from '../components/dashboard/orderStatus';
import { DashboardLayout } from '../components/dashboard-layout';
import { Test } from '../components/dashboard/test';
import { Secured } from '../components/firebase/Secured'
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
    window.location.href = './business/login'
  )
};

export default Page;
