const { request, response } = require('express')
const express = require('express')
const server = express()

//middleware
server.use(express.json())

server.get('/hola', (request, response) =>{
    response.write('GET /hola')
    response.end()
})

server.post('/hola', (request, response) =>{
    response.write('Éste es un post a /hola')
    response.end( )
})



//----------------- EJERCICIO ------------------
// server.get('/koders', (request, response) =>{
//     response.write('Aquí están todos los koders')
//     response.end()
// })

// server.post('/koders', (request, response) =>{
//     response.write('Aquí puedes crear koders')
//     response.end( )
// })

// server.put('/koders', (request, response) =>{
//     response.write('Aquí puedes sustituir koders')
//     response.end( )
// })

// server.delete('/koders', (request, response) =>{
//     response.write('Aquí puedes eliminar koders')
//     response.end( )
// })

//------------------------ FIN EJERCICIO -------------------------
server.get('/prueba', (req,res) =>{
    // res.writeHead(200, {'Content-Type' : 'application/json'})
    // const json = {msj : 'Aquí la lista de koders'}
    // const jsonStr = JSON.stringify(json)
    // res.write(jsonStr)
    // res.end()
    res.status(401)
    res.json({msj : 'Aquí la lista de koders'})
})

server.post('/koders', (request, response) =>{
    const cuerpo = request.body
    console.log('Body : ', cuerpo)
    response.json({msj : 'ok'})
})

server.listen(8080, () =>{
    console.log('Server is listening in port 8080')
})

