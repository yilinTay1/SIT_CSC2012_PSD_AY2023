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

export const Mcd = () => {
  return (
    <>
      <Card sx={{ display: "flex" }}>
        <Box>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              Live From Space
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Mac Miller
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image="/static/images/customer_view/restaurant/mcd.jpg"
          alt="Live from space album cover"
        />
      </Card>
    </>
  );
};