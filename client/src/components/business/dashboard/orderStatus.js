import { Doughnut } from 'react-chartjs-2';
import { Box, Card, CardContent, CardHeader, Divider, Typography, useTheme } from '@mui/material';
import LaptopMacIcon from '@mui/icons-material/Pending';
import TabletIcon from '@mui/icons-material/CheckCircle';
import React, { useRef , useState , useEffect }         from 'react'
import { firebase_app , firebase_fs }                   from '../../firebase/firebase-config';
import { collection , getDocs , doc , setDoc , addDoc, getDoc } from 'firebase/firestore'

export const OrderStatus = (props) => {
  const theme = useTheme();

  const [ ordersPending , setOrdersPending ] = useState(0)
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
                                  setOrdersPending(orderPending)
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

  const data = {
    datasets: [
      {
        data: [ordersCompleted, ordersPending],    // [8, 2]
        backgroundColor: ['#020202', '#e40b16'],
        borderWidth: 8,
        borderColor: '#FFFFFF',
        hoverBorderColor: '#FFFFFF'
      }
    ],
    labels: ['Completed', 'Pending']
  };



  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  const devices = [
    {
      title: 'Completed',
      value: ordersCompleted,  // 8
      icon: LaptopMacIcon,
      color: '#020202'
    },
    {
      title: 'Pending',
      value: ordersPending,  // 2
      icon: TabletIcon,
      color: '#E53935'
    }
  ];

  return (
    <Card {...props}>
      <CardHeader title="Order Status"/>
      <Divider/>
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: 'relative'
          }}
        >
          <Doughnut
            data={data}
            options={options}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 2
          }}
        >
          {devices.map(({
            color,
            icon: Icon,
            title,
            value
          }) => (
            <Box
              key={title}
              sx={{
                p: 1,
                textAlign: 'center'
              }}
            >
              <Icon color="action"/>
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {title}
              </Typography>
              <Typography
                style={{ color }}
                variant="h4"
              >
                {value}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};
