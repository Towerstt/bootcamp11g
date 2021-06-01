import React from "react";
import AppCard from "../AppCard";
import Styles from "../../styles/Right.module.css";

class RightAside extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div className="rigth-aside col-3">
        <div className="row">
          <img
            className={`${Styles.firstImg} col-6`}
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--KSi8rL3T--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://res.cloudinary.com/practicaldev/image/fetch/s--3GWkSFQs--/c_fill%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_420/https://dev-to-uploads.s3.amazonaws.com/uploads/podcast/image/346/5b0bd095-4a8c-4449-a43d-9e9b154b9d09.png"
            alt="RAImg"
          />
          <div className={`col-6`}>
            <span className={`${Styles.firstTitle}`}>Tune into DEV News</span>
            <p>
              <small className={` ${Styles.firstText}`}>
                Freenode’s Mass Resignations, NVIDIA’s Less Crypto-Friendly
                Cards, and more! — <a href="/">listen now!</a>
              </small>
            </p>
          </div>
        </div>
        <AppCard>
          <div class="card-body">
            <h5 class="card-title mb-3 d-flex justify-content-between">
              <span>Listings</span>
              <a href="/">See all</a>
            </h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <span>Walkthrough Wednesday with Gant Laborde</span>
                <br />
                <small className="text-muted">events</small>
              </li>
              <li class="list-group-item">
                <span>
                  Apache Pinot: A Hands on Course Available on Udemy now
                </span>
                <br />
                <small className="text-muted">education</small>
              </li>
              <li class="list-group-item">
                <span>Easily manage 301 redirects</span>
                <br />
                <small className="text-muted">products</small>
              </li>
              <li class="list-group-item">
                <span>French software developer to hire</span>
                <br />
                <small className="text-muted">forhire</small>
              </li>
              <li class="list-group-item">
                <span>All Technical Updates via Notification</span>
                <br />
                <small className="text-muted">misc</small>
              </li>
              <div class="card-footer mx-auto">Create a Listing</div>
            </ul>
          </div>
        </AppCard>

        <AppCard>
          <div class="card-body">
            <h5 class="card-title mb-3 d-flex justify-content-between">
              <span className='font-weight-bold'>#news</span>
            </h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <span>This week in Flutter #5</span>
                <br />
                <small className="text-muted">New</small>
              </li>
            </ul>
        </div>
        </AppCard>

      </div>
    );
  }
}

export default RightAside;
