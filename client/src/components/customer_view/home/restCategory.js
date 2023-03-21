import { Button, IconButton, Link, Typography, Stack } from "@mui/material";
import NextLink from "next/link";
import StorefrontIcon from "@mui/icons-material/Storefront";
import RiceBowlIcon from "@mui/icons-material/RiceBowl";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import React from "react";

export const RestCategory = () => {
  return (
    <>
      <Button variant="contained" size="large" style={{ padding: 25, width: 140, marginRight: 50 }}>
        <Stack spacing={1}>
          <NextLink href="/customer/home">
            <Link
              to="/customer/home"
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

      <Button
        variant="contained"
        size="large"
        style={{ padding: 25, width: 140, marginRight: 50, backgroundColor: "black" }}
      >
        <Stack spacing={1}>
          <NextLink href="/customer/chinese">
            <Link
              to="/customer/chinese"
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

      <Button variant="contained" size="large" style={{ padding: 25, width: 140, marginRight: 50 }}>
        <Stack spacing={1}>
          <NextLink href="/customer/cafe">
            <Link
              to="/customer/cafe"
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
