import React from "react";

import Header from "../../components/Header/Header";
import LeftAside from "../../components/Left-aside/Left-aside";
import GeneralContainer from "../../components/Center/Center";
import RightAside from "../../components/Right-aside/Right-aside";
import AppLoading from "../../components/AppLoading";
import Counter from "../../components/Counter";

export default function Home() {
  return (
    <React.Fragment>                   
      <div>
        <Counter />
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
