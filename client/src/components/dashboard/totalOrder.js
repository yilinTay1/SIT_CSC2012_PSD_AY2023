import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import MoneyIcon from '@mui/icons-material/Money';
import React, { useRef , useState , useEffect }         from 'react'
import { firebase_app , firebase_fs }                   from '../firebase/firebase-config';
import { collection , getDocs , doc , setDoc , addDoc, getDoc } from 'firebase/firestore'

export const TotalOrder = (props) => {

  const [ totalProfit , setTotalProfit ] = useState(0)
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
                                  setTotalProfit(totalOrder)
                                })
                                .catch( err => {} )
              }
          }
          catch(err)
          {
              console.log('Firebase error : ', err)
          }
      }
  },[runOnce])              
  //--------------------------------------------------------------------------------------------------------------------

  return(
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
            TOTAL ORDER
          </Typography>
          <Typography
            color="textPrimary"
            variant="h1"
          >
            {totalProfit}
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
            <MoneyIcon/>
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
  )
};
