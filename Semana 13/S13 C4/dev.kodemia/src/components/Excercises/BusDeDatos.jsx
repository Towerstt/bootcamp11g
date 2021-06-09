import React from 'react'

const petsData = [
    {name : 'blabla', age : '1'},
    {name : 'blabla', age : '2'},
    {name : 'blabla', age : '3'},
    {name : 'blabla', age : '4'},
    {name : 'blabla', age : '5'},
    {name : 'blabla', age : '6'},

]

export default function BusDeDatos (){
    const petsUI = petsData.map(({name, age}, index, array) =>(
        <li className="list-group-item">Name : {name}, Age : {age}</li>
    ))
    
    return(
        <div className="container mt-5 mx-auto">
            <div className="row justify-content-center">
                <div className="col-6">
                    <div className="card w-50 text-white bg-success">
                        <div className="card-header font-weight-bold align-self-center ">Pets</div>
                        <ul className="list-group list-goup-flush">{petsUI}</ul>
                    </div>
                </div>
            </div>
        </div>
    )
}