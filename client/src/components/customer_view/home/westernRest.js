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

export const WesternRest = () => {
  return (
    <>
      <Grid item>
        <Card sx={{ maxWidth: 550 }}>
          <NextLink href="/customer/order/mcd">
            <Link
              to="/customer/order/mcd"
              // variant="subtitle2"
              underline="hover"
              sx={{
                cursor: "pointer",
                color: "black",
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
        </Card>
      </Grid>

      <Grid item>
        <Card sx={{ maxWidth: 550 }}>
          <CardMedia
            sx={{ height: 180 }}
            image="/static/images/customer_view/restaurant/pasta.jpg"
            title="croissant"
          />
          <CardContent sx={{ width: 550 }}>
            <Typography gutterBottom variant="h5" component="div">
              Pastamina
            </Typography>
            <Typography variant="body2" color="text.secondary">
              20 min away
            </Typography>
            <Typography variant="h6" color="text.secondary" style={{ float: "right" }}>
              <StarRateIcon fontSize="medium" /> 3.9
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};