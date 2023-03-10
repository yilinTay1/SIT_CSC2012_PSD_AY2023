import * as React from "react";
import NextLink from "next/link";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  Link,
} from "@mui/material";

// Nav bar resource: https://mui.com/material-ui/react-app-bar/

// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

function LoginNavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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
          <NextLink 
          href="/customer/home" 
          passHref>
            <img 
            src="/static/Logo.png" 
            alt="logo" 
            width="170" 
            height="170" />
          </NextLink>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
            <Button style={{ marginLeft: 30 }}>
              <NextLink 
              href="/customer/home" 
              passHref>
                <Typography 
                color="white" 
                variant="h5">
                  Restaurant
                </Typography>
              </NextLink>
            </Button>
          </Box>

          {/* <Box>
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
                  Sign In
                </Button>
              </Link>
            </NextLink>
            <br></br>
            <NextLink href="/customer/register">
              <Link
                to="/customer/register"
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
                  Sign Up
                </Button>
              </Link>
            </NextLink>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default LoginNavBar;
