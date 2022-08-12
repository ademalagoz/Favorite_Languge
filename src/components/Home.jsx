import React, { useState } from "react";
import Search from "./Search";

const Home = () => {
  const [user, setUser] = useState("");
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [noOfRepos, setNoOfRepos] = useState(0);
  const [seeProfile, setSeeProfile] = useState("");
  const api = `https://api.github.com/users/${user}/repos?per_page=100`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    //1- get all data of selected user

    try {
      const res = await fetch(api);
      const data = await res.json();

      setNoOfRepos(data.length);
      setAvatar(data[0]?.owner?.avatar_url);
      setSeeProfile(data[0]?.owner?.html_url);
    //2- get allLanguages of that user

      const allLanguages = await data
        .map(({ language }) => language)
        .reduce((acc, cur) => {
          if (cur) {
            acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
          }
          return acc;
        }, {});

    //3- Find the favorite language of relevant user

      const favoriteLanguage = Object.keys(allLanguages).reduce((a, b) =>
        allLanguages[a] > allLanguages[b] ? a : b
      );
   
      if (data.length === 0) {
        setError(true);
      } else {
        setResult(favoriteLanguage);
      }
      setIsLoading(false);
    } catch (e) {
      console.error(e);
      setResult("");
      setIsLoading(false);
      setError(true);
    }
  };
  console.log(error);

  return (
    <Search
      user={user}
      setUser={setUser}
      favoriteLanguage={result}
      avatar={avatar}
      isLoading={isLoading}
      handleSubmit={handleSubmit}
      noOfRepos={noOfRepos}
      seeProfile={seeProfile}
      setSeeProfile={setSeeProfile}
    />
  );
};

export default Home;
