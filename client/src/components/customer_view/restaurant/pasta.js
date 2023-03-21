import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

export const Pasta = () => {
  return (
    <>
      <Card sx={{ display: "flex", padding: 10 }}>
        <Box>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h1" align="center">
              Pastamania Restaurant
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Wallet friendly yet delicious pasta ready to satisfy your cravings at anytime!
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ height: 250, width: 350, marginLeft: "auto" }}
          image="/static/images/customer_view/restaurant/pasta.jpg"
          alt="Pastamania"
        />
      </Card>
    </>
  );
};
