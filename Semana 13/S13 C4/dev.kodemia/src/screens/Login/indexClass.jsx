import React from 'react'

class LoginClass extends React.Component{
    constructor(props){
        super(props)
        this.history = this.props.history
        this.state = {
            email : '',
            password : ''
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit (event) {
        event.preventDefault()
        console.log(this.email, this.password)
        setTimeout(() =>{
            this.history.push('/')
        },1000)
    }


    render() {

        const {email, password} = this.state

        return (
            <form className= 'w-25 mx-auto mt-5'>
        <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={this.handleInput} name='email' />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
         </div>
        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={this.handleInput} name='password'/>
        </div>
            <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" >Check me out</label>
         </div>
         <button type="submit" className="btn btn-primary" onSubmit={this.handleSubmit} >Submit</button>
    </form>
        )
    }
}

export default LoginClass