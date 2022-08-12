import React from "react";
import { Box, Typography, Grid, Stack } from "@mui/material";
import { purple } from "@mui/material/colors";

const Contact = () => {
  return (
    <Box sx={{ bgcolor: purple[50], height: "100vh", pt: 1 }}>
      <Grid item xs={12}>
        <Box textAlign="center">
          <Typography
            variant="h3"
            sx={{
              color: "black",
              fontFamily: "monospace",
              fontWeight: 700,
            }}
          >
            Contact
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "purple",
              fontFamily: "monospace",
              fontWeight: 700,
            }}
          >
            CONTACT US Phone: 07426 123456 <Stack />
            <Stack /> E-Mail: info@githubexplorer.co.uk
            <Stack />
            <Stack />
            Address: 123 Oneway Road, London, England, N14 XYZ
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
