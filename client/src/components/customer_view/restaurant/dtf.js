import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

export const Dtf = () => {
  return (
    <>
      <Card sx={{ display: "flex", padding: 10 }}>
        <Box>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h1" align="center">
              Din Tai Fung
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Chosen as one of the top ten best Chinese restaurants in the world.
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ height: 250, width: 350, marginLeft: "auto" }}
          image="/static/images/customer_view/restaurant/dintaifung.jpg"
          alt="Din Tai Fung"
        />
      </Card>
    </>
  );
};
