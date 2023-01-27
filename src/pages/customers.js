import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { CustomerListResults } from '../components/customer/customer-list-results';
import { CustomerListToolbar } from '../components/customer/customer-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { customers } from '../__mocks__/customers';
import { TotalOrder } from '../components/dashboard/totalOrder';
import { CompleteOrder } from '../components/dashboard/completeOrder';
import { OrderPending } from '../components/dashboard/orderPending';

const Page = () => (
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
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
