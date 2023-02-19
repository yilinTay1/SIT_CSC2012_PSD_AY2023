import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { HistoryListResults } from '../components/history/history-list-results';
import { HistoryListToolbar } from '../components/history/history-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { customers } from '../__mocks__/profitDaily';
import { Secured } from '../components/firebase-auth/Secured'

const Page = () => (
  <>
    <Head>
      <title>
        History | WorthEats
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
        <HistoryListToolbar/>
        <Box sx={{ mt: 3 }}>
          <HistoryListResults customers={customers}/>
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    <Secured/>
    {page}
  </DashboardLayout>
);

export default Page;
