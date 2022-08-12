import React from "react";
import {
  Button,
  Box,
  CircularProgress,
  Typography,
  Grid,
  Input,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { purple } from "@mui/material/colors";

const Search = ({
  user,
  setUser,
  favoriteLanguage,
  avatar,
  isLoading,
  handleSubmit,
  noOfRepos,
  seeProfile,
  setSeeProfile,
}) => {
  const handleProfile = () => {
    setSeeProfile(seeProfile);
  };

  return (
    <Box sx={{ bgcolor: purple[50], height: "100vh", pt: 1 }}>
      <Grid item xs={12}>
        <Box textAlign="center">
          <Typography
            variant="h5"
            sx={{
              color: "purple",
              fontFamily: "monospace",
              fontWeight: 700,
            }}
          >
            Find the Github User's Favorite Language
          </Typography>
        </Box>

        <Box textAlign="center">
          {!isLoading ? (
            <form onSubmit={handleSubmit}>
              <SearchIcon sx={{ marginRight: "10px" }} />
              <Input
                placeholder="type the github username"
         
                value={user}
                onChange={(e) => setUser(e.target.value.trim())}
                sx={{
                  width: "60%",
                  color: "rgba(0, 0, 0, 0.6)",
                  fontSize: "1.5rem",
                }}
              />
              <Button
                onClick={handleSubmit}
                variant="contained"
                type="submit"
                color="secondary"
              >
                Search
              </Button>
            </form>
          ) : (
            <Box sx={{ display: "flex" }}>
              Loading...
              <CircularProgress />
            </Box>
          )}
          <Box sx={{ m: 1 }}>
            {favoriteLanguage ? (
              <>
                <Typography
                  variant="h5"
                  sx={{
                    color: "purple",
                    fontFamily: "monospace",
                    fontWeight: 700,
                  }}
                >
                  {user !== "" &&
                    noOfRepos > 0 &&
                    `${user}'s Favorite Language`}
                </Typography>
                {noOfRepos > 0 && (
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{ bgcolor: "red" }}
                  >
                    {favoriteLanguage}
                  </Button>
                )}
              </>
            ) : (
              <Button variant="contained" type="submit" sx={{ bgcolor: "red" }}>
                No Repo or Account
              </Button>
            )}
          </Box>
        </Box>

        {avatar && handleSubmit && (
          <Box textAlign="center">
            <Box
              component="img"
              sx={{
                maxHeight: "50vh",
                maxWidth: "100%",
              }}
              src={avatar}
              alt="avatar"
            />

            <Box sx={{ mb: 3 }}>
              <Button
                variant="contained"
                type="submit"
                color="secondary"
                sx={{ m: 0.5, mr: 1 }}
              >
                Total Repo: {noOfRepos}
              </Button>

              <Button
                href={seeProfile}
                target="blank"
                onClick={handleProfile}
                variant="contained"
                type="submit"
                color="secondary"
                sx={{ m: 0.5, mr: 1 }}
              >
                See on GitHub
              </Button>
            </Box>
          </Box>
        )}
      </Grid>
    </Box>
  );
};

export default Search;
