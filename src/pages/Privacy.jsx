import React from "react";

import { Box, Typography, Grid } from "@mui/material";
import { purple } from "@mui/material/colors";

const Privacy = () => {
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
            Privacy
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "purple",
              fontFamily: "monospace",
              fontWeight: 700,
            }}
          >
            Our GitHub Security Lab is a world-class security R&D team. We
            inspire and enable the community to secure open source at scale, so
            the world’s software we all depend on sits on foundations you can
            trust. Our ambition is to be the home where security researchers and
            developers can collaborate to make security easy for everyone
            willing to secure open source.
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
};

export default Privacy;
