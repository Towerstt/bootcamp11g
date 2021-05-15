const { log } = require('console')
const { response, request, json } = require('express')
const express = require('express')
const server = express()
server.use(express.json())

const kodersRouter = require('./routers/koders')
const mentorsRouter = require('./routers/mentors')


//Montar el router en el servidor
server.use('/koders', kodersRouter)
server.use('/mentors', mentorsRouter)


server.get('/', (request, response) =>{
    response.json({
        success : true,
        msj : '11G API v1.0'
    })
})



server.listen(8080 , () => console.log('Listening on port 8080...'))