import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

export const Wanton = () => {
  return (
    <>
      <Card sx={{ display: "flex", padding: 10 }}>
        <Box>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h1" align="center">
              Jia Jia Wanton Stall
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Since 1976, Jia Jia Wanton remains one of the residents number 1 choice for wanton
              mee.
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ height: 250, width: 350, marginLeft: "auto" }}
          image="/static/images/customer_view/restaurant/wanton.jpg"
          alt="Jia Jia Wanton"
        />
      </Card>
    </>
  );
};
