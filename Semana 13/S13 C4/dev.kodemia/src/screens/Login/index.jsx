import React, { useState } from 'react'
import { useHistory } from 'react-router'

export default function Login () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory() //Método que contiene el historial. Es un hook global

    const handleSubmit = (event) =>{
        event.preventDefault()
        setTimeout(() =>{
            history.push('/') //Después del click en el botón, reenvía al parámetro dado, en este caso, al home
        })
    }
        return(
        <form className= 'w-25 mx-auto mt-5'>
            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
             </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            </div>
                <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label">Check me out</label>
             </div>
             <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Submit</button>
        </form>
    )
}

