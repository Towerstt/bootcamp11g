import React from "react";

// class HeaderBtn extends React.Component {
//   constructor(props) {
//     super(props);

//     this.props = props;
//   }
//   render() {
//     const classes = this.props.className ? this.props.className : "";
//     if (this.props.type === "anchor") {
//       return (
//         <a href="/" className={classes}>
//           {this.props.text}
//         </a>
//       );
//     } else {
//       return (
//         <button type="button" className={classes}>
//           {this.props.text}
//         </button>
//       );
//     }
//   }
// }



//Refactorizar el componente como clase a componente como función

function HeaderBtn2({className, type, text}) {
  const classes = className ? className : "";
  if (type === "anchor") {
    return (
      <a href="/" className={classes}>
        {text}
      </a>
    );
  } else {
    return (
      <button type="button" className={classes}>
        {text}
      </button>
    );
  }
}

export default HeaderBtn2