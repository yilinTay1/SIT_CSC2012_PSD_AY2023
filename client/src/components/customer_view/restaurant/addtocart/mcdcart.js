import {
  Avatar,
  Button,
  ButtonGroup,
  Box,
  Card,
  CardActions,
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

export const McdCart = () => {
  return (
    <>
      <Grid item>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 200 }}
            image="/static/images/customer_view/cartlist/mcd/burger1.jpg"
            title="burger no cheese"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Cheeseburger ($5)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The same favourite cheeseburger but without cheese.
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained">Add to cart</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 200 }}
            image="/static/images/customer_view/cartlist/mcd/chickensalad1.jpg"
            title="chicken salad no chicken"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Chicken Salad ($7)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The same favourite chicken salad without chicken
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained">Add to cart</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 200 }}
            image="/static/images/customer_view/cartlist/mcd/pancake1.jpg"
            title="pancake no sausage"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Pancake Sausage ($6)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The same favourite combo of pancake with sausage without sausage
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained">Add to cart</Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};
