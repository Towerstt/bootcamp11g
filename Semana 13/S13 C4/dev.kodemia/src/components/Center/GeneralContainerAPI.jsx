import React from "react";
import AppCard from "../AppCard";


export default function GeneralContainerApi(props) {
  console.log(props.data)
  const buildLi = ({id, name, image}, index) => {
    return <div className='w-25 mx-auto' key={id}>
      <AppCard >
          <img src={image} alt="" />
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, voluptate.</p>
        <a href={`/char-detail/${id}`} className="btn btn-success">Details</a>
      </AppCard>
    </div>;
 };
const cardsUi = props.data.map(buildLi);


  return <ul className='d-flex flex-wrap'>{cardsUi}</ul>;
}
