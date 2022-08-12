import React from "react";

import { Box, Typography, Grid } from "@mui/material";
import { purple } from "@mui/material/colors";

const Help = () => {
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
            Help
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "purple",
              fontFamily: "monospace",
              fontWeight: 700,
            }}
          >
            The support options available to GitHub users depend on the products
            used by their personal accounts, any organizations or enterprises
            they are members of, and any GitHub Enterprise Server instances they
            manage. Each product includes a default level of support and
            accounts that use GitHub Enterprise can purchase GitHub Premium
            Support. If you're a member of an organization that uses GitHub
            Enterprise, you can use the drop-down menu in the upper-right corner
            of GitHub Docs to view a version of these articles appropriate to
            your product. For more information, see "About versions of GitHub
            Docs."
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
};

export default Help;
