import React, {useState, useEffect} from "react";
import Header from "../components/Header/Header";
import { useParams} from 'react-router'

export default function AddPost() {
    const [data, setData] = useState('')

    const {id} = useParams()


    useEffect(() =>{
        fetch(`https://react-11g-default-rtdb.firebaseio.com/posts/${id}.json`)
            .then(response => response.json())
            .then(json => setData(json))
    })

  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-11 d-flex justify-content-center">
            <h1>{data.title && data.title}</h1>
            <img alt={data.title && data.title} src={data.image && data.image} styles={{width:'400px'}}/ >
            <p>{data.description && data.description}</p>
            <p>Author : {data.author}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
