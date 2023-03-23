import Head from "next/head";
import { Box, Container, Grid, Typography } from "@mui/material";
import CustomerNavBar from "../../components/customer_view/navigation/navbar";
import React, { useRef, useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import Rating from "@mui/material/Rating";

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
  const [ratings, setRatings] = useState({});

  useEffect(() => {
    if (runOnce.current) {
      runOnce.current = false;
      const isbuyer = sessionStorage.getItem("buyer");
      if (isbuyer) setBuyer(true);
      const storedRatings = localStorage.getItem("ratings");
      if (storedRatings) setRatings(JSON.parse(storedRatings));
    } else {
      localStorage.setItem("ratings", JSON.stringify(ratings));
    }
  }, [runOnce, ratings]);

  return (
    <>
      {buyer && (
        <Head>
          <title>Order History | WorthEats</title>
        </Head>
      )}
      {buyer && (
        <>
          <CustomerNavBar />
          <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
            <Container maxWidth="lg">
              {mockOrders.map((order) => (
                <Box key={order.id} className={classes.orderBox}>
                  <Grid container spacing={2} justifyContent="space-between">
                    <Grid item>
                      <Typography variant="h5">Order #{order.id}</Typography>
                      <Typography variant="subtitle2">
                        {order.date} - {order.restaurant}
                      </Typography>
                      <br />
                      <ul>
                        {order.items.map((item, index) => (
                          <ul key={index}>
                            {item.name} - ${item.price.toFixed(2)}
                            <Grid item xs={4} justifyContent="flex-end">
                              <Rating
                                name={`item-${order.id}-${index}`}
                                value={ratings[`item-${order.id}-${index}`] || 0}
                                onChange={(event, newValue) => {
                                  setRatings({
                                    ...ratings,
                                    [`item-${order.id}-${index}`]: newValue,
                                  });
                                }}
                              />
                            </Grid>
                          </ul>
                        ))}
                      </ul>
                    </Grid>
                    <Grid item>
                      <Typography variant="h5">Total: ${order.total.toFixed(2)}</Typography>
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

History.getLayout = (home) => (
  <>
    <SecuredBuy />
    {home}
  </>
);

export default History;
