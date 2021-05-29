import React from 'react'
import logoSearch from '../../styles/images/search.svg'

class HeaderSearch extends React.Component{
    render(){
        return (
            <a href="/">
                <img src={`${logoSearch}`} alt="DEVLogo" id="logo" />
            </a>
        )
    }
}

export default HeaderSearch