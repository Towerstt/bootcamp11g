const { log } = require('console')
const express = require('express')
const server = express()
const fs = require('fs')
server.use(express.json())


server.get('/koders/:id', (request, response) =>{
    const id = parseInt(request.params.id)
    const content = fs.readFileSync('koders.json', 'utf8')
    const contentJson = JSON.parse(content)
    const koderGot = contentJson.koders.filter(koder => koder.id === id)
    console.log(koderGot)
    if (!koderGot){
        response.status(404)
        response.json({
            success: false,
            message: 'Koder not found'
        })
        return
    } 
    response.json(koderGot)
})

server.delete('/koders/:id', (request, response) =>{
    const id = parseInt(request.params.id)
    const content = fs.readFileSync('koders.json', 'utf8')
    const contentJson = JSON.parse(content)
    const newKoders = contentJson.koders.filter(koder => koder.id !== id)
    contentJson.koders = newKoders
    fs.writeFileSync('koders.json', JSON.stringify(contentJson,null,2), 'utf8')
    response.json({success : true})

})


server.listen(8080 , () => console.log('Listening on port 8080...'))