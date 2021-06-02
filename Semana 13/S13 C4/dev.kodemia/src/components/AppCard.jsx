import React from 'react'
import Styles from '../styles/AppCard.module.css'

class AppCard extends React.Component{
    constructor(props){
        super(props)
        this.props = props
    }
    render(){
        return(
            <div className={`${Styles.cardBody} card mb-3`}>

                    {this.props.children}
            </div>
        )
    }
}

export default AppCard