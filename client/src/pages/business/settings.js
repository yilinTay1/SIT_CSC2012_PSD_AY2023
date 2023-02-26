import Head from 'next/head';
import { Box, Container, Typography } from '@mui/material';
import { DashboardLayout } from '../../components/dashboard-layout';
import { SettingsNotifications } from '../../components/settings/settings-notifications';
import { SettingsPassword } from '../../components/settings/settings-password';
import { Secured } from '../../components/firebase/Secured'
import React, { useRef , useEffect } from 'react'


const Page = () => {

  const runOnce = useRef(true)
  useEffect( () =>
  {
      if( runOnce.current )
      {
          runOnce.current = false
          console.log("Settings")
      }
  },[runOnce])

  return(
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
                <SettingsNotifications />
                <Box sx={{ pt: 3 }}>
                  <SettingsPassword />
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
