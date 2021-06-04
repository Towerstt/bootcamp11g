import React, {useEffect, useState} from 'react' //HOOKS

const number = 2

function Counter () {
    const [count, setCounter] = useState(1)

    useEffect(() =>{            //Con 2 argumentos (callback, array vacío) - Es como DidMount (+/- = constructor)
        console.log('1')
    },[])
        
    useEffect(() =>{            //Con 2 argumentos (callback y estado) - es como el DidUpdate el estado
        console.log('2')
    },[count]) 
    
    useEffect(() =>{            //Con sólo el argumento callback - Es como DidUpdate de TODO (+/- = render)
        console.log('3')
    })

    const modifyCounter = (action) => {
        if(action === 'incrementar'){
            const newState = count * number
            setCounter(newState)
            return
        }
        const newState = count / number
        setCounter(newState)
        return
    }
    return(
        <div className='container p-3'>
            <div className="row">
                <div className="col-12">
                    <p>{count}</p>
                    <button onClick={() => modifyCounter('incrementar')} className='btn btn-success'> * {number}</button>
                    <button onClick={() => modifyCounter('decrementar')} className='btn btn-danger'> / {number}</button>
                </div>
            </div>
        </div>
    )
}

export default Counter