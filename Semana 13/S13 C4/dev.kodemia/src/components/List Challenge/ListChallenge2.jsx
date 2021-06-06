import React, { useState } from "react";
import "../../styles/ListItem.css";

export default function ListChallenge2() {
  const [state, setNewState] = useState({
    clicked: "",
    hovered: "",
    clear: "clear",
  });
  const handleClick = (event) => {
    let liList = document.getElementsByTagName("a");
    console.log(event.target);
    console.log(liList)
    for (let i = 0; i < liList.length - 1; i++) {
      console.log(liList[i]);
      if (event.target === liList[i]) {
        console.log(event.target.href.charAt(event.target.href.length - 1));
        setNewState((prevState) => ({
          clicked: "isClicked",
          clear: "",
          hovered: "",
        }));
        return;
      } else {
        console.log(liList[i]);
        console.log(event.target.href.charAt(event.target.href.length - 1));
        setNewState((prevState) => ({
          clicked: "",
          clear: "clear",
          hovered: "",
        }));
        return;
      }
    }
  };

  //   const handleHover = () => {
  //     setNewState(state.hovered);
  //   };

  const menu = ["New File", "New Window", "Save", "Copy", "Cut", "Delete"];

  return (
    <div className="list-group mt-5">
      <div className="list-group-item w-25 mx-auto px-auto">
        <a
          className={`list-Item ${state.clicked} ${state.clear} ${state.hovered}`}
          href={`#list-item-0`}
          onClick={handleClick}
        >
          {menu[0]}
        </a>
      </div>
      <div className="list-group-item w-25 mx-auto px-auto">
        <a
          className={`list-Item ${state.clicked} ${state.clear} ${state.hovered}`}
          href={`#list-item-1`}
          onClick={handleClick}
        >
          {menu[1]}
        </a>
      </div>
      <div className="list-group-item w-25 mx-auto px-auto">
        <a
          className={`list-Item ${state.clicked} ${state.clear} ${state.hovered}`}
          href={`#list-item-2`}
          onClick={handleClick}
        >
          {menu[2]}
        </a>
      </div>
      <div className="list-group-item w-25 mx-auto px-auto">
        <a
          className={`list-Item ${state.clicked} ${state.clear} ${state.hovered}`}
          href={`#list-item-3`}
          onClick={handleClick}
        >
          {menu[3]}
        </a>
      </div>
      <div className="list-group-item w-25 mx-auto px-auto">
        <a
          className={`list-Item ${state.clicked} ${state.clear} ${state.hovered}`}
          href={`#list-item-4`}
          onClick={handleClick}
        >
          {menu[4]}
        </a>
      </div>
      <div className="list-group-item w-25 mx-auto px-auto">
        <a
          className={`list-Item ${state.clicked} ${state.clear} ${state.hovered}`}
          href={`#list-item-5`}
          onClick={handleClick}
        >
          {menu[5]}
        </a>
      </div>
    </div>
  );
}
