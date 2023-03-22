import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import InsertChartIcon from '@mui/icons-material/AddShoppingCartOutlined';
import React, { useEffect, useRef, useState } from 'react';
import { firebase_fs } from '../../firebase/firebase-config';
import { doc, getDoc } from 'firebase/firestore';

export const OrderPending = (props) => {

  const [ordersPending, setOrdersPending] = useState(0);
  const runOnce = useRef(true);
  //--------------------------------------------------------------------------------------------------------------------
  useEffect(() => {
    if (runOnce.current) {
      runOnce.current = false;
      try {
        const uid = sessionStorage.getItem('uid');
        if (uid) {
          const customer = doc(firebase_fs, 'orders', uid);
          getDoc(customer).then(response => response.data())
                          .then(response => {
                            const { orderCompleted, orderPending, totalOrder } = response;
                            setOrdersPending(orderPending);
                          })
                          .catch(err => {});
        }
      } catch (err) {
        console.log('Firebase error : ', err);
      }
    }
  }, [runOnce]);
  //--------------------------------------------------------------------------------------------------------------------

  return (
    <Card
      sx={{ height: '100%' }}
      {...props}
    >
      <CardContent>
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="overline"
            >
              ORDERS PENDING
            </Typography>
            <Typography
              color="textPrimary"
              variant="h1"
            >
              {ordersPending}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: '#564d4d',
                height: 56,
                width: 56
              }}
            >
              <InsertChartIcon/>
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
