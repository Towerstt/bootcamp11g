import React from "react";
import AppCard from "../AppCard";


export default function GeneralContainerApi(props) {
  console.log(props.data)
  const buildLi = ({id, name, species, image}, index) => {
    return <div className='w-25 mx-auto' key={id}>
      <AppCard >
          <img src={image} alt="" />
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Specie : {species}</p>
        <a href="/" className="btn btn-success">Details</a>
      </AppCard>
    </div>;
 };
const cardsUi = props.data.map(buildLi);


  return <ul>{cardsUi}</ul>;
}
