import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { purple } from "@mui/material/colors";

const Blog = () => {
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
            Blog
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "purple",
              fontFamily: "monospace",
              fontWeight: 700,
            }}
          >
            In July, we experienced one incident that resulted in degraded
            performance for Codespaces. This report also sheds light into two
            incidents in June that impacted multiple GitHub.com services. July
            27 22:29 UTC (lasting 5 hours and 55 minutes) Our alerting systems
            detected degraded availability for Codespaces in the US West and
            East regions during this time. Due to the recency of this incident,
            we are still investigating the contributing factors and will provide
            a more detailed update on cause and remediation in the August
            Availability Report, which will publish the first Wednesday of
            September. Follow up to June 28 17:16 UTC (lasting 26 minutes)
            During this incident, services including GitHub Actions, API
            Requests, Codespaces, Git Operations, GitHub Packages, and GitHub
            Pages were impacted. This was due to excessive load on a proxy
            server that routes traffic to the database. At approximately 14:14
            UTC, the internal APIs that a data migration service uses to
            communicate with GitHub.com began returning 502 Service Unavailable
            errors to requests.Approximately nine minutes later, we began to see
            affected services recover. We have updated exception handling to
            only retry jobs in cases of a specific set of errors. We have also
            adjusted our logic to retry a fixed number of times before logging
            the exception and giving up. These actions eliminate the possibility
            of continuous requeuing. We are also investigating whether changes
            are needed to the rate limits of our internal APIs. In summary
            Please follow our status page for real-time updates on status
            changes. To learn more about what we’re working on, check out the
            GitHub Engineering Blog.
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
};

export default Blog;
