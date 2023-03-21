import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

export const Croissant = () => {
  return (
    <>
      <Card sx={{ display: "flex", padding: 10 }}>
        <Box>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h1" align="center">
              Crazy Croissant Cafe
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Adding the craze to croissants and try our variety of croissant sandwiches!
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ height: 250, width: 350, marginLeft: "auto" }}
          image="/static/images/customer_view/restaurant/crazycross.jpg"
          alt="Crazy Croissant"
        />
      </Card>
    </>
  );
};
