import Head from 'next/head';
import { Box, Container, Typography } from '@mui/material';
import { DashboardLayout } from '../../components/business/dashboard-layout';
import { SettingsPassword } from '../../components/business/addListing/settings-password';
import { SecuredBiz } from '../../components/firebase/SecuredBiz';
import React, { useEffect, useRef } from 'react';

const Page = () => {

  const runOnce = useRef(true);
  useEffect(() => {
    if (runOnce.current) {
      runOnce.current = false;

      const uid = sessionStorage.getItem('uid');
      console.log('uid : ', uid);
    }
  }, [runOnce]);

  return (
    <>
      <Head>
        <title>
          Add Listing | WorthEats
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{ mb: 3 }}
            variant="h4"
          >
            Add Listing
          </Typography>
          <Box sx={{ pt: 3 }}>
            <SettingsPassword/>
          </Box>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    <SecuredBiz/>
    {page}
  </DashboardLayout>
);

export default Page;
