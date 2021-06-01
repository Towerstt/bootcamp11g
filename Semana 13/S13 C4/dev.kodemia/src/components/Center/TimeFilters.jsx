import React from 'react'

class TimeFilters extends React.Component{
    constructor(props){
        super(props)
        this.props = props
    }
    render(){
        return(
            <span>{this.props.text}</span>
        )
    }
}

export default TimeFilters