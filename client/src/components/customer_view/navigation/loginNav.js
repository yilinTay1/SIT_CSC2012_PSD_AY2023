import * as React from "react";
import NextLink from "next/link";
import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";

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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default LoginNavBar;
