import React, { useState } from "react";
import "../../styles/ListItem.css";

export default function ListChallenge2() {
  const [state, setNewState] = useState({
    clicked: "",
    hovered: "",
  });
  const handleClick = (element) => {
    setNewState(() => ({
      ...state,
      clicked: element,
    }));
  };

  const handleHover = (element) => {
    setNewState(() => ({
      ...state,
      hovered: element,
    }));
  };

  const menu = ["New File", "New Window", "Save", "Copy", "Cut", "Delete"];

  return (
    <React.Fragment>
        <h1 className='my-5 text-success text-center'> Lista desplegable con React</h1>
      <div className="list-group mt-5 w-25 mx-auto border border-secondary">
        {menu.map((el, index) => (
          <div
            className={` w-100 d-flex justify-content-center p-3 my-1 ${
              state.clicked === index ? "isClicked" : ""
            } ${state.hovered === index ? "isHovered" : ""}`}
            datakey={index}
            onClick={() => handleClick(index)}
            onMouseOver={() => handleHover(index)}
          >
            <span>{el} </span>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
