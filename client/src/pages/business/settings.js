import Head from 'next/head';
import { Box, Container, Typography } from '@mui/material';
import { DashboardLayout } from '../../components/business/dashboard-layout';
import { SettingsNotifications } from '../../components/business/settings/settings-notifications';
import { SettingsPassword } from '../../components/business/settings/settings-password';
import { SecuredBiz } from '../../components/firebase/SecuredBiz';
import React, { useEffect, useRef } from 'react';

const Page = () => {

  const runOnce = useRef(true);
  useEffect(() => {
    if (runOnce.current) {
      runOnce.current = false;
      console.log('Settings');
    }
  }, [runOnce]);

  return (
    <>
      <Head>
        <title>
          Settings | WorthEats
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
            Settings
          </Typography>
          <SettingsNotifications/>
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
