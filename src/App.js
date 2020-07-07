import React from "react";
import Header from "./Header";
import Logic from "./Logic";
import "./App.css";
import GithubCorner from 'react-github-corner';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Logic />
      <GithubCorner href="https://github.com/JeffThorslund/hoppier-beavers" octoColor="#efe6dd"/>
    </div>
  );
};

export default App;
