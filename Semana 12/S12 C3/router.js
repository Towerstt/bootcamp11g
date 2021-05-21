const express = require('express')
const router = express.Router()

router.use((request, response, next) =>{
    console.log('Middleware a nivel de router')
    next()
})

router.get(('/'), (request, response) =>{
    response.json({
        msj: 'Router'
    })
})

router.get('/hola', (request, response, next) =>{
    console.log('Middleware router y ruta')
    next()
}, (request, response) => response.json({msj : 'router hola'}))

module.exports = router