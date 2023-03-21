import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

export const Mcd = () => {
  return (
    <>
      <Card sx={{ display: "flex", padding: 10 }}>
        <Box>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h1" align="center">
              Mcdonald Restaurant
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              The most famous fast food restaurant where you can get your stomach full quickly!
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ height: 250, width: 350, marginLeft: "auto" }}
          image="/static/images/customer_view/restaurant/mcd.jpg"
          alt="Mcdonald"
        />
      </Card>
    </>
  );
};
