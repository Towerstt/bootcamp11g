import React from 'react'

class UserData extends React.Component{
    constructor(props){
        super(props)
        this.props = props
    }
    render(){
        return(
            <div className='user-data d-flex mb-3'>
                <img className = {`${this.props.className} user-pic`} src={this.props.src} alt="user-avatar rounded-circle" />
                <div>
                    <span className={`${this.props.nameClass} mx-2 user-name d-block`}>{this.props.username}</span>
                    <span className={`${this.props.dateClass} mx-2 date text-muted`}>{this.props.date}</span>
                </div>
            </div>
        )
    }
}

export default UserData