const {
    request
} = require('express')
const express = require('express')
const server = express()
server.use(express.json())
const mongoose = require('mongoose')
const Koder = require('./koderModel')
const DB_USER = 'towers'
const DB_PASSWORD = '102030'
const DB_HOST = 'kodemiahtc.hhcjc.mongodb.net'
const DB_NAME = 'kodemia'
const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`


server.get('/koders', async (request, response) => {
    const queryP = request.query || {}

    const allKoders = await Koder.find(queryP)

    response.json({
        msj: "All Koders",
        success: true,
        data: {
            koders: allKoders
        }
    })
})

server.post('/koders', (request, response) => {
    const koderToPost = request.body
    Koder.create(koderToPost)
    response.json({
        msj: 'Koder posted successfully',
        success: true,
        data: {
            koderPosted: koderToPost
        }
    })
})

server.delete('/koders', async (request, response) => {
    const koderToDelete = request.body
    const newKoderList = await Koder.deleteOne(koderToDelete)
    response.json({
        msj: 'Koder deleted successfully',
        success: true
    })
})

server.patch('/koders', async (request, response) => {
    const queryName = request.body.name
    const newData = request.body

    console.log(newData)
    const koderToUpdate = await Koder.updateOne({
        name: queryName
    }, newData)
    response.json({
        msj: `Koder ${queryName} has been updated successfully`,
        data: {
            name: queryName,
            newData
        }
    })


})

mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((response) => {
        server.listen(8080, () => console.log('Server ready and listening...'))
    })
    .catch((error) => console.error('ERROR : ', error))