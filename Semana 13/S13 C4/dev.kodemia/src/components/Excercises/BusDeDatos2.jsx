import React from "react";

const petsData = {
  dogs: [
    {
      name: "Sr. Peabody",
      age: "5",
    },
    {
      name: "Solovino",
      age: "10",
    },
  ],
  cats: [
    {
      name: "Misifu",
      age: "1",
    },
    {
      name: "Nefermishi",
      age: "5",
    },
  ],
};


export default function PetsDataUi() {

    const petsUi = Object.entries(petsData).map(([kind, pets], index) =>(
        <React.Fragment key={index}>
            <div className="card-header">{kind}</div>
            <ul className="list-group list-group-flush">           
                {pets.map(({name, age}, ind) =>(
                    <li className="list-group-item" key={ind}>Name : {name}, Age : {age}</li>
                ))}
             </ul>


        </React.Fragment>
    ))

    const buildPets = ({name, age}, index) =>(
        <li key={index} className="list-group-item">Name : {name}, Age : {age}</li>
    )
   
    const buildPetType = ([type, pets], index) =>(
        <React.Fragment key={index}>
            <div className="card-header">{type}</div>
            <ul className="list-group list-group-flush">{pets.map(buildPets)}</ul>
        </React.Fragment>
    )

  return (
    <React.Fragment>
        <div className="container mt-5 mx-auto">
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="card w-50 text-white bg-success">
            <div className="card-header font-weight-bold align-self-center ">
              {petsUi}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container mt-5 mx-auto">
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="card w-50 text-white bg-success">
            <div className="card-header font-weight-bold align-self-center ">
              {Object.entries(petsData).map(buildPetType)}
            </div>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}
