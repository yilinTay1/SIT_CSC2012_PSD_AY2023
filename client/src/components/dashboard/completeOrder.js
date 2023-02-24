import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PeopleIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import React, { useRef , useState , useEffect }         from 'react'
import { firebase_app , firebase_fs }                   from '../firebase/firebase-config';
import { collection , getDocs , doc , setDoc , addDoc, getDoc } from 'firebase/firestore'

export const CompleteOrder = (props) => {

  const [ ordersCompleted , setOrdersCompleted ] = useState(0)
  const runOnce = useRef(true)
  //--------------------------------------------------------------------------------------------------------------------
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
                const customer =  doc(firebase_fs , 'orders', uid)
                getDoc(customer).then( response => response.data() )
                                .then( response =>{
                                  const { orderCompleted , orderPending , totalOrder } = response
                                  setOrdersCompleted(orderCompleted)
                                })
                                .catch( err =>  {}  )
              }
          }
          catch(err)
          {
              console.log('Firebase error : ', err)
          }
      }
  },[runOnce])              
  //--------------------------------------------------------------------------------------------------------------------

  return(<Card {...props}>
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
            ORDERS COMPLETED
          </Typography>
          <Typography
            color="textPrimary"
            variant="h1"
          >
            {ordersCompleted}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'primary.main',
              height: 56,
              width: 56
            }}
          >
            <PeopleIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 2
        }}
      >
      </Box>
    </CardContent>
  </Card>)
};
