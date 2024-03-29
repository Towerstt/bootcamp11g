import React from "react";

import Styles from "../../styles/Header.module.css";
import HeaderLogo from "./HeaderLogo";
import HeaderInput from "./HeaderInput";
// import HeaderChat from './HeaderChat'
// import HeaderAlert from './HeaderAlert'
// import HeaderUser from './HeaderUser'
// import HeaderButton from './HeaderButton'
import HeaderBtn from "./HeaderBtn";
import AppThemeToggle from "../AppThemeToggle";

class Header extends React.Component {
  render() {
    return (
      <nav className={`d-flex justify-content-evenly ${Styles.Header}`}>
        <div className={`d-flex ${Styles.left}`}>
          <HeaderLogo className={Styles.StylesLogo} />
          <HeaderInput />
        </div>
        <div
          className={`${Styles.right} d-flex justify-content-evenly align-items-center`}
        >
          {/* <HeaderButton />
                    <HeaderChat />
                    <HeaderAlert />
                    <HeaderUser /> */}
          <HeaderBtn text="Login" type="anchor" className={Styles.anchor} />
          <HeaderBtn text="Create Account" className={`btn btn-primary`} />
          <AppThemeToggle />
        </div>
      </nav>
    );
  }
}

export default Header;
