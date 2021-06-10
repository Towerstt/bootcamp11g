import React, { useEffect, useState } from "react";

import Header from "../../components/Header/Header";
import LeftAside from "../../components/Left-aside/Left-aside";
import GeneralContainer from "../../components/Center/Center";
import GeneralContainerAPI from "../../components/Center/GeneralContainerAPI";
import RightAside from "../../components/Right-aside/Right-aside";
import AppLoading from "../../components/AppLoading";
import Counter from "../../components/Counter";

export default function Home() {

  const [data, setData] = useState({})

  useEffect(() =>{
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((json) => setData(json))
  }, [])

  console.log(data)



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
      <GeneralContainerAPI data={Object.keys(data).length ? data.results : []} />
    </React.Fragment>
  );
}
