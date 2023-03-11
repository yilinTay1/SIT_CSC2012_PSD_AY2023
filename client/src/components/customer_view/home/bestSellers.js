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
  Link,
} from "@mui/material";
import NextLink from "next/link";
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
<<<<<<< HEAD
          <NextLink href="/customer/order">
            <Link
              to="/customer/order"
              // variant="subtitle2"
              underline="hover"
              sx={{
                cursor: "pointer",
                color: "black"
              }}
            >
              <CardMedia
                sx={{ height: 180 }}
                image="/static/images/customer_view/restaurant/mcd.jpg"
                title="burger"
              />
              <CardContent sx={{ width: 550 }}>
                <Typography gutterBottom variant="h5" component="div">
                  Mcdonalds
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  15 min away
                </Typography>
                <Typography variant="h6" color="text.secondary" style={{ float: "right" }}>
                  <StarRateIcon fontSize="medium" /> 4.3
                </Typography>
              </CardContent>
            </Link>
          </NextLink>
=======
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
>>>>>>> d5886659f018628bf9f90a670a747fc89cb7b652
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
