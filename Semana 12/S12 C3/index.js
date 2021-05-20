const express = require('express')
const server = express()

server.use((request, response, next) => {
    
})


server.get('/', (request, response) =>{
    response.json({
        msj : 'API Middleware'
    })
})


server.listen(8080 , () => console.log('SERVER ready and listening...'))


//Middlewares a 3 niveles
//1.- Nivel aplicación - Servidor
//2.- Nivel router
//3.- Nivel ruta