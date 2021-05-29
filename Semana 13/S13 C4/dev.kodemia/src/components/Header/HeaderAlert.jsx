import React from 'react'
import logoAlert from '../../styles/images/alert.svg'

class HeaderAlert extends React.Component{
    render(){
        return (
            <a href='/'>
                <img src={`${logoAlert}`} alt="DEVLogo" id="logo" />
            </a>
        )
    }
}

export default HeaderAlert