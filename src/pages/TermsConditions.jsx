import React from "react";

import { Box, Typography, Grid, Stack } from "@mui/material";
import { purple } from "@mui/material/colors";

const TermsConditions = () => {
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
            TermsConditions
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "purple",
              fontFamily: "monospace",
              fontWeight: 700,
            }}
          >
            When the EU began working on the Copyright Directive in 2016,
            software developers weren’t on policymakers’ minds. Drafts
            effectively required upload filters that would have wreaked havoc on
            online software collaboration. We worked to mobilize developers and
            convey their concerns to members of parliament, and together we
            succeeded: The final text included an exemption for “open source
            software developing and sharing platforms.”
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
};

export default TermsConditions;
