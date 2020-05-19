import React, { useContext } from "react";
import "./styles/App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import { store } from "./config/store";

const App = () => {
  const globalState = useContext(store);
  const { labels } = globalState.state;

  return (
    <div className="App">
      <Header logo={labels.lblLogo} />
      <Main />
    </div>
  );
};

export default App;
