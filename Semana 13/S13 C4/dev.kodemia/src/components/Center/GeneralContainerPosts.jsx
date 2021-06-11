import React from "react";
import AppCard from "../AppCard";
import {useHistory} from 'react-router'


export default function GeneralContainerPosts(props) {
  const history = useHistory()


  const buildLi = ([key, {author, image, title, descrption}]) => {
    return <div className='w-25 mx-auto' key={key}>
      <AppCard >
          <img src={image} alt="" />
        <h5 className="card-title">{title}</h5>
        <h5 className='text-muted'>{author}</h5>
        <p className="card-text">{descrption}</p>
        <button className='btn btn-secondary' onClick={history.push(`/posts/${key}`)}>Post Detail</button>
      </AppCard>
    </div>;
 };
const cardsUi = props.data.reverse().map(buildLi); //Los ordena de más nuevo a más antiguo


  return <ul className='d-flex flex-wrap'>{cardsUi}</ul>;
}
