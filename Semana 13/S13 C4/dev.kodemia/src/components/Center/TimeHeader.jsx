import React from "react";
import TimeFilters from "./TimeFilters";

export default function TimeHeader () {
    return(
        <div className="Time-header d-flex justify-content-evenly mb-2">
            <span className="Posts w-25 font-weight-bold">Posts</span>
            <span className="d-flex justify-content-around w-75">
              <TimeFilters text="Feed" />
              <TimeFilters text="Week" />
              <TimeFilters text="Month" />
              <TimeFilters text="Year" />
              <TimeFilters text="Infinity" />
              <TimeFilters text="Latest" />
            </span>
          </div>
    )
}