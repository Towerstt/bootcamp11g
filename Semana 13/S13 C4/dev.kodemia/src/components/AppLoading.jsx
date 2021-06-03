import React from 'react'
import Styles from '../styles/AppLoading.module.css'

class AppLoading extends React.Component{
    constructor(props){
        super(props)
        this.props = props

        this.state = {active : true}
    }
    render(){
        const active = this.state.active ? Styles.active : ''
        return(
            <div className={`${Styles.loading} ${active} align-items-center justify-content-center`}>
                <div className='spinner-border' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </div>
            </div>
        )
    }

    componentDidMount(){
        setTimeout(() =>{
            this.setState({active : false})
        },100)
    }
}

export default AppLoading