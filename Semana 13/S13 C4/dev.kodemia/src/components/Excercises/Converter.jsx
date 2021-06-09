import React, { useState } from 'react'

const USD_VALUE = 19.84
var HOY = new Date() 

export default function Converter (){
    const [usd, setUsd] = useState(0)
    const [mxn, setMxn] = useState(0)

    return (
        <React.Fragment>
            <form className= 'w-25 mx-auto mt-5'>
            <div className="form-group">
                <label className='font-weight-bold'>USD</label>
                <input type="number" className="form-control" id="usd-input" placeholder="1 USD" value={usd} onChange={(event) => {
                    setUsd(event.target.value)
                    setMxn(event.target.value * USD_VALUE)}} />
                <small id="emailHelp" className="form-text text-muted">{HOY.getDate()}</small>
             </div>
            <div className="form-group">
                <label>MXN</label>
                <input type="number" className="form-control" id="exampleInputPassword1" placeholder="1 MXN" value={mxn} onChange={(event) => {
                    setUsd(event.target.value/USD_VALUE)
                    setMxn(event.target.value)}}/>
            </div>
        </form>
        <br /><br /><br /><br />
        </React.Fragment>
    )
}