import React, { useState } from "react";
import Search from "./Search";
import { Box } from "@mui/material";
import back from "../assets/githubback.png";

const Home = () => {
  const [user, setUser] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const api = `https://api.github.com/users/${user}/repos?per_page=100`;
  // const api = `https://random-data-api.com/api/users/random_user`;

  //1- get all data of selected user

  const handleSubmit = async (e) => {
    setIsLoading(true);
    await fetch(api)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setIsLoading(false);
      })
      .catch(
        (err) => console.log(err),
        setErrorMessage("Unable to fetch user")
      );
    //   setIsLoading(false););
    // .catch(() => {
    //   setErrorMessage("Unable to fetch user");
    //   setIsLoading(false);

    // });
  };

  //2-get the all languages of that user

  //Optional chaining   " ?. "

  const allLanguages = data.map?.((element) => element.language);

  console.log(data[0]);
  const photo = data[0]?.owner.avatar_url;

  //3- compare the languages and find the favorite language of that user

  const favoriteLanguage =
    allLanguages.length > 0 &&
    allLanguages.reduce(
      (acc, cur) =>
        allLanguages.filter((arr) => arr === acc).length >=
          allLanguages.filter((arr) => arr === cur).length && acc !== null
          ? acc
          : cur,

      null
    );

  // console.log("user", user);
  // console.log("data", data, "data.length=", data.length);
  // console.log(
  //   "allLanguages",
  //   allLanguages,
  //   "allLanguages.length=",
  //   allLanguages.length
  // );
  // console.log("favoriteLanguage", favoriteLanguage);
  return (
    <>
      <Box sx={{ mb: 3 }}>
        <Search
          user={user}
          setUser={setUser}
          favoriteLanguage={favoriteLanguage}
          photo={photo}
          isLoading={isLoading}
          handleSubmit={handleSubmit}
          data={data}
        />
      </Box>
    </>
  );
};

export default Home;
