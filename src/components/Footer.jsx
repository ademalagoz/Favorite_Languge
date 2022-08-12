import * as React from "react";
import { AppBar, Box, Link, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <footer>
      <AppBar
        position="static"
        color="secondary"
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          right: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 1,
            fontFamily: "roboto",
            fontWeight: 200,
            letterSpacing: ".01rem",
            textDecoration: "none",
          }}
        >
          <Typography
            variant="p"
            href="/"
            underline="none"
            sx={{
              mr: 2,
              color: "yellow",
              fontFamily: "monospace",
              fontWeight: 700,
            }}
          >
            Copyright ©2022
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link
              variant="p"
              href="/termsConditions"
              underline="none"
              sx={{
                mr: 2,
                ml: 1,
                color: "yellow",
                textDecoration: "none",
                fontFamily: "monospace",
                fontWeight: 700,
              }}
            >
              Terms&Conditions
            </Link>
            <Link
              variant="p"
              href="/privacy"
              underline="none"
              sx={{
                mr: 2,
                ml: 1,
                color: "yellow",
                textDecoration: "none",
                fontFamily: "monospace",
                fontWeight: 700,
              }}
            >
              Privacy
            </Link>
            <Link
              variant="p"
              href="/help"
              underline="none"
              sx={{
                mr: 2,
                ml: 1,
                color: "yellow",
                textDecoration: "none",
                fontFamily: "monospace",
                fontWeight: 700,
              }}
            >
              Help
            </Link>
          </Box>
        </Box>
      </AppBar>
    </footer>
  );
};
export default Footer;
