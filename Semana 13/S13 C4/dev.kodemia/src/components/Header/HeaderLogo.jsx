import React from 'react'
import DEVLogo from '../../styles/images/devto.svg'

class HeaderLogo extends React.Component{
    render(){
        return (
            <img src={`${DEVLogo}`} alt="DEVLogo" id="logo" />
        )
    }
}

export default HeaderLogo