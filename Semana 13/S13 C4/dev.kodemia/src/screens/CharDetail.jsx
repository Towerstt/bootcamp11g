import React, { useState, useEffect } from "react";

export default function CharDetail() {
  const url = window.location.href;
  const charId = url.split("/")[4];
  console.log(charId);

  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${charId}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);

  const buildLi = (
    { id, name, status, species, type, gender, image },
    index
  ) => {
    return (
      <React.Fragment>
        <img className="card-img-top" src={image} alt="blabla" />
        <div class="card-body w-100 bg-secondary h-100">
          <h2 className="card-title text-white align-self-center my-5">
            {name}
          </h2>
          <ul className="card-text">
            <h4 className="text-white mb-3">Status : {status}</h4>
            <h4 className="text-white mb-3">Specie : {species}</h4>
            <h4 className="text-white mb-3">Type : {type}</h4>
            <h4 className="text-white mb-3">Gender : {gender}</h4>
          </ul>
          <div className="d-flex justify-content-around">
            <a href={`/char-detail/${id -1}`} className="w-25" >
            <button
              disabled={id === 1 ? true : false}
              className="btn btn-primary"
              href={`/char-detail/${id - 1}`}
            >
              Previous
            </button>
            </a>
            <a href={`/char-detail/${id + 1}`} className="w-25">
              <button
                className="btn btn-success"
                href={`localhost:3000/char-detail/${id + 1}`}
              >
                Next
              </button>
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  };

  return <div class="card w-50 mx-auto h-75">{buildLi(data)}</div>;
}
