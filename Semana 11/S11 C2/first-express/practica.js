//------------ PRÁCTICA -------------
const fs = require('fs')
const express = require('express')
const { json } = require('express')
const server = express()
server.use(express.json())

 server.get('/koders', async (request, response) =>{
    //  const json = fs.readFileSync('koders.json', 'utf8')
    data = await fs.promises.readFile('koders.json', 'utf8')
     const jsonParsed = JSON.parse(data)
     response.json(jsonParsed.koders)
     response.end()
})

server.post('/koders', (request, response) =>{
    const name = request.body.name
    const gender = request.body.gender
    const newKoder = {name : name , gender : gender}
    const content = fs.readFileSync('koders.json', 'utf8')
    const contentJson = JSON.parse(content)
    contentJson.koders.push(newKoder)
    console.log(contentJson)
    fs.writeFileSync('koders.json', JSON.stringify(contentJson, null, 1), 'utf8')
    response.json({success : true})
})

server.patch('/koders/:id', (request, response) =>{
    const id = parseInt(request.params.id)
    const name = request.body.name
    const gender = request.body.gender
    const content = fs.readFileSync('koders.json', 'utf8')
    const contentJson = JSON.parse(content)
    const newKoders = contentJson.koders.reduce((koders, curr) =>{
        id === curr.id ? curr.name = name : null
        return [...koders, curr]
    },[])
    contentJson.koders = newKoders
    fs.writeFileSync('koders.json', JSON.stringify(contentJson,null,2), 'utf8')
    response.json({success : true})
})

server.listen(8080, () => console.log('Escuchando...'))