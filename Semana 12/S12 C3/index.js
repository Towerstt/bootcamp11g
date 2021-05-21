const express = require('express')
const server = express()
const router = require('./router')

server.use((request, response, next) => {
    console.log('Middleware a nivel de aplicación')
    next()
})

server.use('/', router)
server.get('/', (request, response, next) =>{
    console.log('Middleware a nivel de ruta')
    next()
}, (request, response) =>{
    response.json({
        msj : 'API Middleware'
    })
})


server.listen(8080 , () => console.log('SERVER ready and listening...'))


//Middlewares a 3 niveles
//1.- Nivel aplicación - Servidor
//2.- Nivel router
//3.- Nivel ruta