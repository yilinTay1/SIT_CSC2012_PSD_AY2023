import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import NextLink from "next/link";
import { useState } from "react";
import { Badge, Paper } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import Router from "next/router";

// Import from other components
import { EmailPassword } from "../../firebase/EmailPassword";

function CustomerNavBar({ cartItems = 0, setCartItems }) {
  // Cart Things
  const [showCart, setShowCart] = useState(false);

  const handleRemoveFromCart = (item) => {
    // remove item from the cart
    const updatedItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedItems);
  };

  const handleCheckout = () => {
    // handle the checkout logic here
    console.log("Checkout clicked!");
  };

  const handleCartBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setShowCart(false);
    }
  };

  // Cart Things
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (event) => {
    setAnchorElUser(null);
  };

  const handleChangePassword = () => {
    let _redirectPage = "/customer/change_pwd";
    Router.push(_redirectPage).catch(console.error);
    setAnchorElUser(null);
  };

  const handleLogoutMenu = () => {
    const biz = sessionStorage.getItem("business");
    let _redirectPage = "/customer/login"; // default login page
    if (biz) _redirectPage = "/business/login"; // unless previously logged in as business
    if (EmailPassword.logOut()) {
      Router.push(_redirectPage).catch(console.error);
      setAnchorElUser(null);
    }
  };

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "black",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NextLink href="/customer/home" passHref>
            <img src="/static/Logo.png" alt="logo" width="170" height="170" />
          </NextLink>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button style={{ marginLeft: 30 }}>
              <NextLink
                href="/customer/home"
                passHref
                style={{ cursor: "pointer", color: "black", textDecoration: "None" }}
              >
                <Typography color="white" variant="h5">
                  Restaurant
                </Typography>
              </NextLink>
            </Button>
            <Button style={{ marginLeft: 30 }}>
              <NextLink
                href="/customer/history"
                passHref
                style={{ cursor: "pointer", color: "black", textDecoration: "None" }}
              >
                <Typography color="white" variant="h5">
                  History
                </Typography>
              </NextLink>
            </Button>
            <Button style={{ marginLeft: 30 }}>
              <NextLink
                href="/customer/settings"
                passHref
                style={{ cursor: "pointer", color: "black", textDecoration: "None" }}
              >
                <Typography color="white" variant="h5">
                  Settings
                </Typography>
              </NextLink>
            </Button>
          </Box>

          {/* Start Dropdown Cart. */}
          <div style={{ position: "relative", marginRight: 15 }}>
            <IconButton
              color="inherit"
              aria-label="Open cart"
              onClick={() => setShowCart(!showCart)}
            >
              <Badge
                badgeContent={
                  cartItems ? cartItems.reduce((acc, item) => acc + item.quantity, 0) : 0
                }
                color="error"
              >
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            {showCart && (
              <Paper
                onBlur={() => setShowCart(false)}
                style={{
                  position: "absolute",
                  top: "64px", // adjust as needed
                  right: 0,
                  width: "20vw", // adjust as needed
                  maxHeight: "400px",
                  overflow: "auto",
                  zIndex: 9999,
                  backgroundColor: "#fff",
                  padding: "10px",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", // add shadow for aesthetics
                  borderRadius: "8px", // add rounded corners for aesthetics
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ borderBottom: "1px solid #ccc", pb: 1, textAlign: "center" }}
                >
                  Order Summary
                </Typography>
                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <div
                      key={item.id}
                      style={{ display: "flex", padding: 15, textAlign: "center" }}
                    >
                      <p style={{ marginTop: 10 }}>
                        {item.name} x {item.quantity}
                      </p>
                      <button
                        variant="contained"
                        style={{
                          marginLeft: 10,
                          marginTop: 10,
                          border: "None",
                          backgroundColor: "transparent",
                        }}
                        onClick={() => handleRemoveFromCart(item)}
                      >
                        <DeleteIcon />
                      </button>
                    </div>
                  ))
                ) : (
                  <Typography variant="body1" align="center" sx={{ my: 4, color: "#888" }}>
                    Nothing in the Cart
                  </Typography>
                )}
                {cartItems.length > 0 && (
                  <div style={{ textAlign: "center" }}>
                    <Button variant="contained" onClick={handleCheckout} style={{ marginTop: 20 }}>
                      Confirm Checkout
                    </Button>
                  </div>
                )}
              </Paper>
            )}
          </div>
          {/* End of Dropdown cart. */}

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleChangePassword}>
                <NextLink
                  href="/customer/change_pwd"
                  passHref
                  style={{ cursor: "pointer", color: "black", textDecoration: "None" }}
                >
                  <Typography textAlign="center">Change Password</Typography>
                </NextLink>
              </MenuItem>
              <MenuItem onClick={handleLogoutMenu}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default CustomerNavBar;
