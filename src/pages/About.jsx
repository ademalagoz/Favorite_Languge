import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { purple } from "@mui/material/colors";

const About = () => {
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
            About
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "purple",
              fontFamily: "monospace",
              fontWeight: 700,
            }}
          >
            GitHub, Inc., is an Internet hosting service for software
            development and version control using Git. It provides the
            distributed version control of Git plus access control, bug
            tracking, software feature requests, task management, continuous
            integration, and wikis for every project. Headquartered in
            California, it has been a subsidiary of Microsoft since 2018. It is
            commonly used to host open source software development projects. As
            of June 2022, GitHub reported having over 83 million developers and
            more than 200 million repositories, including at least 28 million
            public repositories. It is the largest source code host as of
            November 2021.
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
};

export default About;
