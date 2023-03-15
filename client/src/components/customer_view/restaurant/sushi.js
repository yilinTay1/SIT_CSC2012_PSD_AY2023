import {
  Avatar,
  Button,
  ButtonGroup,
  Box,
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

export const Sushi = () => {
  return (
    <>
      <Card sx={{ display: "flex", padding: 10 }}>
        <Box>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h1" align="center">
              Sushi Express Restaurant
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Satisfy your sushi cravings at anytime and anywhere!
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ height: 250, width: 350, marginLeft: "auto" }}
          image="/static/images/customer_view/restaurant/sushiexpress.png"
          alt="Sushi Express"
        />
      </Card>
    </>
  );
};
