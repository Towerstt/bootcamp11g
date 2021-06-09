import React from 'react'
import UserData from './UserData'
import CardFooter from './CardFooter'
import Styles from "../../styles/Center.module.css";

export default function CardBody (){
    return(
        <React.Fragment>
              <div class="card-body">
              <UserData
                className={Styles.userPic}
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--ivD2q6cD--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/600844/618bf69b-a4e0-4483-8668-22ce6270a1f7.png"
                username="Joseph Maurer"
                nameClass={Styles.userName}
                date="May 31"
                dateClass={Styles.date}
              />
              <h5 className={`${Styles.title2} card-title mb-3`}>
                Getting a URL Parameter in Javascript
              </h5>
              <ul class="hashtags mb-2 text-muted list-inline mb-3">
                <li className="list-inline-item mx-2">#todayilearned</li>
                <li className="list-inline-item mx-2">#webdev</li>
                <li className="list-inline-item mx-2">#javascript</li>
                <li className="list-inline-item mx-2">#programming</li>
              </ul>
              <CardFooter
                likes="3"
                comments="Add a"
                time="3"
                iconClass={Styles.icons}
                saveClass={Styles.save}
                timeClass={Styles.timeText}
              />
            </div>
        </React.Fragment>
    )
}