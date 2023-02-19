import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { CustomerListResults } from '../components/customer/customer-list-results';
import { CustomerListToolbar } from '../components/customer/customer-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { customers } from '../__mocks__/customers';
import { Secured } from '../components/firebase/Secured'
import React, { useRef , useEffect } from 'react'

const Page = () => {
  
  const runOnce = useRef(true)
  useEffect( () =>
  {
      if( runOnce.current )
      {
          runOnce.current = false
          console.log("/order")
      }
  },[runOnce])
  
  return(
          <>
            <Head>
              <title>
                Order | WorthEats
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
                <CustomerListToolbar/>
                <Box sx={{ mt: 3 }}>
                  <CustomerListResults customers={customers}/>
                </Box>
              </Container>
            </Box>
          </>
        )
};

Page.getLayout = (page) => (
  <DashboardLayout>
    <Secured />
    {page}
  </DashboardLayout>
);

export default Page;
