import React from 'react'
import logoChat from '../../styles/images/chat.svg'

class HeaderChat extends React.Component{
    render(){
        return (
            <a href="/">
                <img src={`${logoChat}`} alt="DEVLogo" id="logo" />
            </a>
        )
    }
}

export default HeaderChat