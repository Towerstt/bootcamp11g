import React from "react";
import AppCard from "../AppCard";
import UserData from "./UserData";
import Styles from "../../styles/Center.module.css";
import CardFooter from "./CardFooter";
import TimeHeader from "./TimeHeader";

class GeneralContainer extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;
  }
  render() {
    return (
      <React.Fragment>
        <div className="container col-6">
          <TimeHeader />
          <AppCard>
            <img
              class="card-img-top"
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--RSxS3HFH--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5r666r2r0lceigbl5wyf.png"
              alt="Card cap"
            />
            <div class="card-body">
              <UserData
                className={Styles.userPic}
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--R7MEvLfK--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/624270/b4ca9987-1321-47d2-bade-0359fef0b51d.png"
                username="Techy Programmers"
                nameClass={Styles.userName}
                date="May 31"
                dateClass={Styles.date}
              />
              <h5 className={`${Styles.title} card-title`}>
                How to make an awsome card hover effect
              </h5>
              <ul class="hashtags mb-2 text-muted list-inline">
                <li className="list-inline-item mx-2">#html</li>
                <li className="list-inline-item mx-2">#css</li>
                <li className="list-inline-item mx-2">#begginers</li>
                <li className="list-inline-item mx-2">#webdev</li>
              </ul>
              <CardFooter
                likes="66"
                comments="4"
                time="2"
                iconClass={Styles.icons}
                saveClass={Styles.save}
                timeClass={Styles.timeText}
              />
            </div>
          </AppCard>

          <AppCard>
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
          </AppCard>

          <AppCard>
            <div class="card-body">
              <UserData
                className={Styles.userPic}
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--VcYdgRi1--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/633045/0021102c-84fc-441e-9bb3-89d6c67bad2b.jpeg"
                username="Barnabas Babatunde"
                nameClass={Styles.userName}
                date="May 27"
                dateClass={Styles.date}
              />
              <h5 className={`${Styles.title2} card-title mb-3`}>
                Error Handling in React
              </h5>
              <ul class="hashtags mb-2 text-muted list-inline mb-3">
                <li className="list-inline-item mx-2">#react</li>
                <li className="list-inline-item mx-2">#javascript</li>
                <li className="list-inline-item mx-2">#webdev</li>
              </ul>
              <CardFooter
                likes="95"
                comments="2"
                time="5"
                iconClass={Styles.icons}
                saveClass={Styles.save}
                timeClass={Styles.timeText}
              />
            </div>
          </AppCard>
        </div>
      </React.Fragment>
    );
  }
}

export default GeneralContainer;
