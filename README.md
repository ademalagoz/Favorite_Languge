# About Programme

This application finds any Github user’s favourite programming language.
Once you type any Github username, you are able to see what the favourite programming language is, the Github user's profile photo, total repositories and user's Github link.

# **Technologies**

- Language: JavaScript
- Front-End Framework: React
- Testing: Testing-library/react and Jest
- Styling and Structure: Material UI
- Version Control: Git/Github
- Deployment: Netlify

# **Tasks**

- Create Home, Search, Navbar, Footer components and Routes for other pages in React.
- Fetch data from API using asynchronous function to fetch and filter the data.
- Create a callback function in order to find the all languages with using array methods (map.(), reduce.().
- Create a callback function in order to find out the most favourite languages used Object.keys() and array method reduce().
- Use React Hooks useState to store data and props for transferring.
- Finally, get the favourite language and more details.
- Write a test for any error.

# **Challenges**

- In most cases, the majority of Github users’ have repositories and different kinds of languages. We should find a way to catch them.
- However, in some cases, some of the users have “no repository”, and some of them have “null” language names in their repository.
- Also, sometimes clients who will be able to use this application can type random characters to this input area and Github users may not exist.

# **Solution**

- In this task we used `https://api.github.com/users/${user}/repos?per_page=100` api for fetching.
- Created a handleSubmit function to use our using with Async/Await fetching api, filtering and getting the solution.
  -When an event is triggered we used e.preventDefault(), to prevent default actions of browsers.
- We need to think about some delays when we fetch the api and created a loading component for the latency.
- Created a callback function in order to find all languages using array methods (map.(), reduce.().
- Created a callback function in order to find out the most favourite languages used Object.keys() and array method reduce().
- Used React Hooks useState to store data and props for transferring.
- Finally, get the favourite language and more details.
- Also we get and showed the avatar, total repository and Github link of that user.
  -We wrote a test for any error. Tested in different stories with using Testing-library/react and Jest ```

# **Extra**

- Navbar, Footer, logo and different pages added.
- This app is created as Full Responsive by using MUI library.
- Added to displaying area avatar, total repos and user’s Github link.
- Created Routes, hamburger menu, Blog, Contact, Privacy, Help etc. pages.

# How to Use This Application

- In the project directory, run `npm install` in the terminal.
- You can run `npm start` in the terminal.
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
- Type the any Github username to the input area.
- You can click or touch your ‘Enter’ button.
- The page will reload when you make changes.
- If you want to test the open the test folder and app run `npm test` in search.spec.jsx file.
