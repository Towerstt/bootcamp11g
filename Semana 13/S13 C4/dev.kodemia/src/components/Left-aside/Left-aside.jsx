import React from "react";
import laHome from "../../styles/images/la-home.svg";
import laReading from "../../styles/images/la-readingList.svg";
import laListings from "../../styles/images/la-listings.svg";
import laPodcasts from "../../styles/images/la-podcasts.svg";
import laVideos from "../../styles/images/la-videos.svg";
import laTags from "../../styles/images/la-tags.svg";
import AppCard from "../AppCard";
import Btn from "../Header/HeaderBtn";

import LaAnchor from "./La-icons";

class LeftAside extends React.Component {
  render() {
    return (
      <div className="left-aside col-3">
        <div className="card-sup">
          <AppCard>
            <div className="card-body">
              <h5 class="card-title">
                <span className="font-weight-bold text-primary">
                  DEV Community{" "}
                </span>
                is a community of 629,415 amazing developers
              </h5>
              <p class="card-text">
                We're a place where coders share, stay up-to-date and grow their
                careers.
              </p>
              <Btn
                type="button"
                className="btn btn-primary d-block mx-auto"
                text="Create new Account"
              />
              <Btn className="btn btn-link d-block mx-auto mt-2" text="Login" />
            </div>
          </AppCard>
        </div>
        <ul className="left-aside-container d-flex flex-column">
          <LaAnchor imgSrc={laHome} imgAlt="Home" text="Home" />
          <LaAnchor imgSrc={laReading} imgAlt="Reading" text="Reading" />
          <LaAnchor imgSrc={laListings} imgAlt="Listings" text="Listings" />
          <LaAnchor imgSrc={laPodcasts} imgAlt="Podcasts" text="Podcasts" />
          <LaAnchor imgSrc={laVideos} imgAlt="Videos" text="Videos" />
          <LaAnchor imgSrc={laTags} imgAlt="Tags" text="Tags" />
        </ul>
      </div>
    );
  }
}

export default LeftAside;
