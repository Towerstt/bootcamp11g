import React from 'react'
import Styles from '../../styles/Header.module.css'
import HeaderLogo from './HeaderLogo'
import HeaderInput from './HeaderInput'
import HeaderChat from './HeaderChat'
import HeaderAlert from './HeaderAlert'
import HeaderUser from './HeaderUser'
import HeaderButton from './HeaderButton'
class Header extends React.Component {
    render(){
        return (
            <nav className={`d-flex justify-content-evenly ${Styles.Header}`}>
                <div className={`d-flex ${Styles.left}`}>
                    <HeaderLogo className={Styles.StylesLogo} />
                    <HeaderInput />
                </div>
                <div className={`${Styles.right} d-flex justify-content-between align-items-center`}>
                    <HeaderButton />
                    <HeaderChat />
                    <HeaderAlert />
                    <HeaderUser />
                    
                    
                </div>
            </nav>
        )
    }
}

export default Header