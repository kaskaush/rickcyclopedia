import React from "react";
import "./styles/App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import { LBL_LOGO } from "./utility/constants";

const App = () => {
  return (
    <div className="App">
      <Header logo={LBL_LOGO} />
      <Main />
    </div>
  );
};

export default App;
