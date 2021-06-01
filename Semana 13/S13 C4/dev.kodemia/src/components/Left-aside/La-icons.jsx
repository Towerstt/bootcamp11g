import React from 'react'

class IconsAndText extends React.Component{
    constructor(props){
        super(props)

        this.props = props
    }
    render(){
        return(
            <li className='list-inline'>
                <a href='/'>
                <img src={this.props.imgSrc} alt={this.props.imgAlt} className='list-inline-item'/>
                <p className='list-inline-item'>{this.props.text}</p>
            </a>
            </li>
        )
    }
}

export default IconsAndText