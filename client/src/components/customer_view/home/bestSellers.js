import {
  Avatar,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
  Stack,
} from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import React, { useRef, useState, useEffect } from "react";
// import { firebase_app, firebase_fs } from "../firebase/firebase-config";
// import { collection, getDocs, doc, setDoc, addDoc, getDoc } from "firebase/firestore";

export const BestSellers = () => {
  return (
    <>
      <Grid item>
        <Card sx={{ maxWidth: 550 }}>
          <CardMedia
            sx={{ height: 180 }}
            image="/static/images/customer_view/restaurant/crazycross.jpg"
            title="croissant"
          />
          <CardContent sx={{ width: 550 }}>
            <Typography 
                        gutterBottom 
                        variant="h5" 
                        component="div">
              Crazy Croissant
            </Typography>
            <Typography 
                        variant="body2" 
                        color="text.secondary">
              10 min away
            </Typography>
            <Typography 
                        variant="h6" 
                        color="text.secondary" 
                        style={{ float: "right" }}>
              <StarRateIcon fontSize="medium" /> 4.5
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item>
        <Card sx={{ maxWidth: 550 }}>
          <CardMedia
            sx={{ height: 180 }}
            image="/static/images/customer_view/restaurant/mcd.jpg"
            title="burger"
          />
          <CardContent sx={{ width: 550 }}>
            <Typography 
                        gutterBottom 
                        variant="h5" 
                        component="div">
              Mcdonalds
            </Typography>
            <Typography 
                        variant="body2" 
                        color="text.secondary">
              15 min away
            </Typography>
            <Typography 
                        variant="h6" 
                        color="text.secondary" 
                        style={{ float: "right" }}>
              <StarRateIcon fontSize="medium" /> 4.3
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item>
        <Card sx={{ maxWidth: 550 }}>
          <CardMedia
            sx={{ height: 180 }}
            image="/static/images/customer_view/restaurant/sushiexpress.png"
            title="sushi"
          />
          <CardContent sx={{ width: 550 }}>
            <Typography 
                        gutterBottom 
                        variant="h5" 
                        component="div">
              Sushi Express
            </Typography>
            <Typography 
                        variant="body2" 
                        color="text.secondary">
              20 min away
            </Typography>

            <Typography 
                        variant="h6" 
                        color="text.secondary" 
                        style={{ float: "right" }}>
              <StarRateIcon fontSize="medium" /> 4.0
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};
