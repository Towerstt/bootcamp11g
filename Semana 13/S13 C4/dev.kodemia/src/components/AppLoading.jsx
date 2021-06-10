import React, { useState } from "react";
import Styles from "../styles/AppLoading.module.css";

// class AppLoading extends React.Component {
//   constructor(props) {
//     super(props);
//     this.props = props;

//     this.state = { active: true };
//   }
//   render() {
//     const active = this.state.active ? Styles.active : "";
//     return (
//       <div
//         className={`${Styles.loading} ${active} align-items-center justify-content-center`}
//       >
//         <div className="spinner-border" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//       </div>
//     );
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ active: false });
//     }, 100);
//   }
// }

//Refactorizando el componente como clase a componente como función

function AppLoading2(props) {
  const [active, setActive] = useState(true);
  setTimeout(() => {
    setActive(false);
  }, 2000);

  const isActive = active ? Styles.active : "";
  return (
    <div
      className={`${Styles.loading} ${isActive} align-items-center justify-content-center`}
    >
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default AppLoading2;
