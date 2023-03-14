import {
  Avatar,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Grid,
  IconButton,
  Link,
  Typography,
  Stack,
} from "@mui/material";
import NextLink from "next/link";
import StorefrontIcon from "@mui/icons-material/Storefront";
import RiceBowlIcon from "@mui/icons-material/RiceBowl";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import MoneyIcon from "@mui/icons-material/Money";
import ListGroup from "react-bootstrap/ListGroup";
import React, { useRef, useState, useEffect } from "react";
// import { Button, ButtonGroup } from "react-bootstrap";
// import { firebase_app, firebase_fs } from "../firebase/firebase-config";
// import { collection, getDocs, doc, setDoc, addDoc, getDoc } from "firebase/firestore";

export const RestCategory = () => {
  return (
    // <ListGroup horizontal>
    //   <ListGroup.Item>This</ListGroup.Item>
    //   <ListGroup.Item>ListGroup</ListGroup.Item>
    //   <ListGroup.Item>renders</ListGroup.Item>
    //   <ListGroup.Item>horizontally!</ListGroup.Item>
    // </ListGroup>
    // <ButtonGroup variant="contained" aria-label="outlined primary button group">
    //   <Button style={{marginRight: 10}}>One</Button>
    //   <br></br>
    //   <Button>Two</Button>
    //   <Button>Three</Button>
    // </ButtonGroup>
    <>
      {/* <Grid item lg={3} sm={6} xl={3} xs={12}> */}
      <Button variant="contained" size="large" style={{ padding: 25, width: 140, marginRight: 50 }}>
        <Stack spacing={1}>
          <NextLink href="/customer/home">
            <Link
              to="/customer/home"
              // variant="subtitle2"
              underline="hover"
              sx={{
                cursor: "pointer",
                color: "black",
              }}
            >
              <IconButton aria-label="all-restaurant">
                <StorefrontIcon fontSize="large" />
              </IconButton>
            </Link>
          </NextLink>
          <Typography variant="h5">Featured</Typography>
        </Stack>
      </Button>
      {/* </Grid> */}

      {/* <Grid item lg={3} sm={6} xl={3} xs={12}> */}
      <Button
        variant="contained"
        size="large"
        style={{ padding: 25, width: 140, marginRight: 50, backgroundColor: "black" }}
      >
        <Stack spacing={1}>
          <NextLink href="/customer/chinese">
            <Link
              to="/customer/chinese"
              // variant="subtitle2"
              underline="hover"
              sx={{
                cursor: "pointer",
                color: "black",
              }}
            >
              <IconButton aria-label="chinese" style={{ color: "white" }}>
                <RiceBowlIcon fontSize="large" />
              </IconButton>
            </Link>
          </NextLink>
          <Typography variant="h5">Chinese</Typography>
        </Stack>
      </Button>
      {/* </Grid> */}

      <Button variant="contained" size="large" style={{ padding: 25, width: 140, marginRight: 50 }}>
        <Stack spacing={1}>
          <NextLink href="/customer/cafe">
            <Link
              to="/customer/cafe"
              // variant="subtitle2"
              underline="hover"
              sx={{
                cursor: "pointer",
                color: "black",
              }}
            >
              <IconButton aria-label="cafe">
                <LocalCafeIcon fontSize="large" />
              </IconButton>
            </Link>
          </NextLink>
          <Typography variant="h5">Cafe</Typography>
        </Stack>
      </Button>

      <Button
        variant="contained"
        size="large"
        style={{ padding: 25, width: 140, marginRight: 50, backgroundColor: "black" }}
      >
        <Stack spacing={1}>
          <NextLink href="/customer/western">
            <Link
              to="/customer/western"
              // variant="subtitle2"
              underline="hover"
              sx={{
                cursor: "pointer",
                color: "black",
              }}
            >
              <IconButton aria-label="western" style={{ color: "white" }}>
                <LunchDiningIcon fontSize="large" />
              </IconButton>
            </Link>
          </NextLink>
          <Typography variant="h5">Western</Typography>
        </Stack>
      </Button>

      <Button variant="contained" size="large" style={{ padding: 25, width: 140, marginRight: 50 }}>
        <Stack spacing={1}>
        <NextLink href="/customer/japanese">
            <Link
              to="/customer/japanese"
              // variant="subtitle2"
              underline="hover"
              sx={{
                cursor: "pointer",
                color: "black",
              }}
            >
          <IconButton aria-label="japanese">
            <RamenDiningIcon fontSize="large" />
          </IconButton>
          </Link>
          </NextLink>
          <Typography variant="h5">Japanese</Typography>
        </Stack>
      </Button>
    </>
  );
};
