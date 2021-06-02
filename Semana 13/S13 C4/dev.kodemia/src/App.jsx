import React from "react";
import "./styles/index.css";

import Header from "../src/components/Header/Header";
import LeftAside from "../src/components/Left-aside/Left-aside";
import GeneralContainer from "./components/Center/Center";
import RightAside from "./components/Right-aside/Right-aside";
import AppLoading from "./components/AppLoading";


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Header />
        </div>
        <div className="total-container container-fluid">
          <div className="row">
            <LeftAside />
            <GeneralContainer />
            <RightAside />
          </div>
        </div>
        <AppLoading />
      </React.Fragment>
    );
  }
}

export default App;
