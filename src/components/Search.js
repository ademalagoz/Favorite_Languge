import React from "react";
import {
  Button,
  Box,
  CircularProgress,
  Typography,
  Grid,
  Stack,
  Input,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { blue, red, purple } from "@mui/material/colors";

const Search = ({
  user,
  setUser,
  favoriteLanguage,
  photo,
  isLoading,
  handleSubmit,
  data,
}) => {
  return (
    <Box sx={{ bgcolor: purple[50], height: "100vh", pt: 3 }}>
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

              <Box sx={{ m: 2 }}>
                {user && favoriteLanguage ? (
                  <>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "purple",
                        fontFamily: "monospace",
                        fontWeight: 700,
                      }}
                    >
                      {user}'s Favorite Language
                    </Typography>
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{ bgcolor: "red" }}
                    >
                      {favoriteLanguage}
                    </Button>
                  </>
                ) : (
                  user &&
                  favoriteLanguage === undefined &&
                  favoriteLanguage === false &&
                  data.length === 0 && <h3>No Language Found!</h3>
                )}
              </Box>
            </form>
          ) : (
            <Box sx={{ display: "flex" }}>
              Loading...
              <CircularProgress />
            </Box>
          )}
        </Box>

        {user && favoriteLanguage && (
          <Box textAlign="center">
            {photo ? (
              <Box
                component="img"
                sx={{
                  maxHeight: "50vh",
                  maxWidth: "100%",
                }}
                src={photo}
                alt={data[0].owner.login}
              />
            ) : (
              "No Profile Photo"
            )}

            <Stack />
            <Button
              onClick={handleSubmit}
              variant="contained"
              type="submit"
              color="secondary"
              sx={{ m: 0.5, mr: 1 }}
            >
              Total Repo: {data.length}
            </Button>
            <Button
              onClick={handleSubmit}
              variant="contained"
              type="submit"
              color="secondary"
              sx={{ m: 0.5 }}
            >
              Detail
            </Button>
          </Box>
        )}
      </Grid>
    </Box>
  );
};

export default Search;
