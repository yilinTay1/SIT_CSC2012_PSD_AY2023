import { Box, Container, Grid, Typography } from "@mui/material";
import CustomerNavBar from "../../components/customer_view/navigation/navbar";
import React, { useRef, useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";

const mockOrders = [
  {
    id: 1,
    date: "2022-03-10",
    restaurant: "Pizza Hut",
    items: [
      { name: "Pepperoni Pizza", price: 10.99 },
      { name: "Garlic Knots", price: 5.99 },
    ],
    total: 16.98,
  },
  {
    id: 2,
    date: "2022-03-05",
    restaurant: "McDonald's",
    items: [
      { name: "Big Mac", price: 5.99 },
      { name: "Fries", price: 3.99 },
      { name: "Coke", price: 1.99 },
    ],
    total: 11.97,
  },
];

const useStyles = makeStyles((theme) => ({
  orderBox: {
    padding: theme.spacing(2),
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(2),
  },
}));

const History = () => {
  const classes = useStyles();
  const runOnce = useRef(true);
  const [buyer, setBuyer] = useState(false);
  useEffect(() => {
    if (runOnce.current) {
      runOnce.current = false;
      const isbuyer = sessionStorage.getItem("buyer");
      if (isbuyer) setBuyer(true);
      console.log("/");
    }
  }, [runOnce]);

  return (
    <>
      {buyer && (
        <>
          <CustomerNavBar />
          <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
            <Container maxWidth="lg">
              <Typography variant="h3" gutterBottom>
                Order History
              </Typography>
              {mockOrders.map((order) => (
                <Box key={order.id} className={classes.orderBox}>
                  <Grid container spacing={2} justifyContent="space-between">
                    <Grid item>
                      <Typography variant="h5">
                        Order #{order.id}
                      </Typography>
                      <Typography variant="subtitle2">
                        {order.date} - {order.restaurant}
                      </Typography>
                      <br></br>
                      <ul>
                        {order.items.map((item, index) => (
                          <ul key={index}>
                            {item.name} - ${item.price.toFixed(2)}
                          </ul>
                        ))}
                      </ul>
                    </Grid>
                    <Grid item>
                      <Typography variant="h5">
                        Total: ${order.total.toFixed(2)}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              ))}
            </Container>
          </Box>
        </>
      )}
    </>
  );
};

export default History;
