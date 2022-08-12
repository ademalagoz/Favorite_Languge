import * as React from "react";
import {
  Button,
  Link,
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  Container,
  MenuItem,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import gitHubLogo from "../assets/octocat.png";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorEl(null);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <AppBar
      position="static"
      color="secondary"
      style={{
        position: "relative",
        left: 0,
        top: 0,
        right: 0,
      }}
    >
      <Container disableGutters>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link href="https://api.github.com/" target="_blank">
              <Box
                component="img"
                sx={{
                  m: 0.5,
                  maxHeight: 100,
                  maxWidth: 100,
                }}
                src={gitHubLogo}
                alt="gitHubLogo"
              />
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
            <GitHubIcon
              sx={{
                mr: 1,
                color: "black",
              }}
            />
            <Link
              variant="h5"
              href="/"
              underline="none"
              sx={{ color: "yellow", fontFamily: "monospace", fontWeight: 700 }}
            >
              Github Explorer
            </Link>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              href="/blog"
              onClick={handleOpen}
              underline="none"
              sx={{
                color: "yellow",
                fontFamily: "monospace",
                fontWeight: 700,
              }}
            >
              Blog
            </Button>

            <Button
              href="/about"
              onClick={handleOpen}
              underline="none"
              sx={{
                color: "yellow",
                fontFamily: "monospace",
                fontWeight: 700,
              }}
            >
              About
            </Button>
            <Button
              href="/contact"
              underline="none"
              onClick={handleOpen}
              sx={{
                color: "yellow",
                fontFamily: "monospace",
                fontWeight: 700,
              }}
            >
              Contact
            </Button>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "red" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorEl)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              <MenuItem
                onClick={handleCloseNavMenu}
                sx={{ display: "flex", flexDirection: "column", color: "red" }}
              >
                <Button
                  href="/blog"
                  color="secondary"
                  variant="text"
                  onClick={handleOpen}
                >
                  <Typography textAlign="center">Blog</Typography>
                </Button>
                <Button
                  href="/about"
                  color="secondary"
                  variant="text"
                  onClick={handleOpen}
                >
                  <Typography textAlign="center">About</Typography>
                </Button>
                <Button href="/contact" color="secondary" onClick={handleOpen}>
                  <Typography textAlign="center">Contact</Typography>
                </Button>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
