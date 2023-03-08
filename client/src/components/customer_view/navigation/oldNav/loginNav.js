import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import NextLink from "next/link";
import { useRef, useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Bell as BellIcon } from "../../../../icons/bell";
import { UserCircle as UserCircleIcon } from "../../../../icons/user-circle";
import { Users as UsersIcon } from "../../../../icons/users";
import { AccountPopover } from "../../../account-popover";

function CustLoginNav() {
  // HTML Frontend
  return (
    <Navbar bg="black" variant="dark">
      <Container>
        {/* Brand Icon */}
        <Navbar.Brand>
          <NextLink href="/customer/home" passHref>
            <img src="/static/Logo.png" alt="logo" width="150" height="150" />
          </NextLink>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            href="/customer/home"
            style={{
              color: "white",
              padding: 20,
            }}
          >
            <Typography color="inherit" variant="h5">
              Restaurant
            </Typography>
          </Nav.Link>
          <Nav.Link
            href="#features"
            style={{
              color: "white",
              padding: 20,
            }}
          >
            <Typography color="inherit" variant="h5">
              Orders
            </Typography>
          </Nav.Link>
          <Nav.Link
            href="#pricing"
            style={{
              color: "white",
              padding: 20,
            }}
          >
            <Typography color="inherit" variant="h5">
              History
            </Typography>
          </Nav.Link>
          <Nav.Link
            href="#pricing"
            style={{
              color: "white",
              padding: 20,
            }}
          >
            <Typography color="inherit" variant="h5">
              Account
            </Typography>
          </Nav.Link>
        </Nav>

        <Navbar.Collapse className="justify-content-end">
          <NextLink href="/customer/login">
            <Link
              to="/customer/login"
              variant="subtitle2"
              underline="hover"
              sx={{
                cursor: "pointer",
              }}
            >
              <Button
                color="primary"
                //disabled={formik.isSubmitting}
                fullWidth
                size="large"
                variant="contained"
              >
                Logout
              </Button>
            </Link>
          </NextLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustLoginNav;
