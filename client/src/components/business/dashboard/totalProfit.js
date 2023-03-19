import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import React, { useRef , useEffect , useState } from 'react'
import { firebase_app , firebase_fs }                   from '../../firebase/firebase-config';
import { collection , getDocs , doc , setDoc , addDoc, getDoc } from 'firebase/firestore'

export const TotalProfit = (props) => {

const runOnce = useRef(true)
const [ hasData      , updateData     ] = useState(false);
const [ totalProfits , setProfits  ] = useState(0);

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
                                let totalProfits = 0
                                for(var txn in transactions)
                                {
                                  const { totalProfit } = response[ txn ]
                                  totalProfits += parseInt(totalProfit.replace(/[^0-9]/g, ""))
                                }
                                setProfits( "$" + (Math.round(totalProfits/1000)).toString() + "k"  )
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

return  (
  <Card {...props}>
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
            TOTAL PROFIT
          </Typography>
          <Typography
            color="textPrimary"
            variant="h1"
          >
            {totalProfits}
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
            <AttachMoneyIcon/>
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
   )
};
