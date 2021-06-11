import React, { useEffect, useState } from "react";

import Header from "../../components/Header/Header";
import LeftAside from "../../components/Left-aside/Left-aside";
import GeneralContainer from "../../components/Center/Center";
import GeneralContainerAPI from "../../components/Center/GeneralContainerAPI";
import GeneralContainerPosts from "../../components/Center/GeneralContainerPosts";
import RightAside from "../../components/Right-aside/Right-aside";
import AppLoading from "../../components/AppLoading";
import Counter from "../../components/Counter";

export default function Home() {

  const [data, setData] = useState({})
  const [posts, setPosts] = useState({})

  useEffect(() =>{
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((json) => setData(json))

      fetch('https://react-11g-default-rtdb.firebaseio.com/posts.json')
      .then((response) => response.json())
      .then((json) => setPosts(json))


    
  //   fetch("https://react-11g-default-rtdb.firebaseio.com/posts/-Mbsbu-9wI3uZYpNTyiv.json", {
  //     method: 'PATCH',
  //     mode: 'cors',
  //     cors : true,
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({author:"Hugo - PATCH", title : "Prueba a FireBase"})
  //   })
  //     .then((response) => response.json())
  //     .then(json => console.log(json))
      
  }, [])

  console.log(data)



  // async function postData(url = 'https://react-11g-default-rtdb.firebaseio.com/', toFirebase) {
  //   const response = await fetch(url, {
  //     method: 'POST',
  //     mode: 'cors',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     redirect: 'follow',
  //     body: JSON.stringify(toFirebase) // body data type must match "Content-Type" header
  //   });
  //   return response.json(); // parses JSON response into native JavaScript objects
  // }

  return (
    <React.Fragment>                   
      <div>
        <Counter />
        <Header />
      </div>    
      <div className="total-container container-fluid">
        <div className="row">
          <LeftAside />
          <GeneralContainer/>
          <RightAside />
        </div>
      </div>
      <AppLoading />
      <GeneralContainerAPI data={Object.keys(data).length ? data.results : []} />
      <GeneralContainerPosts data={Object.entries(posts).length ? Object.entries(posts) : []} />
    </React.Fragment>
  );
}