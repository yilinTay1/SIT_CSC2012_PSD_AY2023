import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { HistoryListResults } from '../../components/business/history/history-list-results';
import { HistoryListToolbar } from '../../components/business/history/history-list-toolbar';
import { DashboardLayout } from '../../components/business/dashboard-layout';
import { SecuredBiz } from '../../components/firebase/SecuredBiz'
import React, { useRef , useEffect , useState } from 'react'
import { firebase_app , firebase_fs }                           from '../../components/firebase/firebase-config';
import { collection , getDocs , doc , setDoc , addDoc, getDoc } from 'firebase/firestore'
//import { customers } from '../../__mocks__/profitDaily';

const Page = () => {

  const runOnce = useRef(true)
  const [ hasData   , updateData      ] = useState(false);
  const [ customers , updateCustomers ] = useState(null);

  useEffect( () =>
  {
      if( runOnce.current )
      {
          runOnce.current = false
          try
          {
            const uid = sessionStorage.getItem('uid')
            if(uid)
            {
              const profits =  doc(firebase_fs , 'profitDaily', uid)
              getDoc(profits).then( response => response.data() )
                              .then( response => {
                                const transactions = response
                                let _customers = []
                                for(var txn in transactions)
                                {
                                  const _obj = response[ txn ]
                                  _customers.push( _obj )
                                }
                                updateCustomers( _customers )
                                updateData(true)
                              })
                              .catch( err => {} )
            }
          }
          catch(err)
          {
            console.log( err )
          }
      }
  },[runOnce])

  return(
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
                    {
                      hasData &&
                      <HistoryListResults customers={customers}/>
                    }
                    
                </Box>
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
