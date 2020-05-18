import React from "react";
import "./styles/App.scss";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="App">
      <Header logo={"Rickcyclopedia."} />
      <Main />
    </div>
  );
};

export default App;
