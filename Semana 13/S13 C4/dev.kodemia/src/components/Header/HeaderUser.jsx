import React from 'react'
import logoUser from '../../styles/images/user.webp'

class HeaderUser extends React.Component{
    render(){
        return (
            <img src={`${logoUser}`} alt="DEVLogo" id="user" />
        )
    }
}

export default HeaderUser