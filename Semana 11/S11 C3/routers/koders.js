const fs = require('fs')
const express = require('express')
const router = express.Router()


router.get('/:id', (request, response) =>{
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

router.delete('/:id', (request, response) =>{
    const id = parseInt(request.params.id)
    const content = fs.readFileSync('koders.json', 'utf8')
    const contentJson = JSON.parse(content)
    const newKoders = contentJson.koders.filter(koder => koder.id !== id)
    contentJson.koders = newKoders
    fs.writeFileSync('koders.json', JSON.stringify(contentJson,null,2), 'utf8')
    response.json({success : true})

})

router.get('/', async (request,response) =>{
    const genderFilter = request.query.gender
    const count = parseInt(request.query.count) || 0
    const nameFilter = request.query.name
    const content = fs.readFileSync('koders.json', 'utf8')
    const contentJson = JSON.parse(content)

    let kodersData = null
    let kodersToShow = null

    if(genderFilter){
        kodersData = contentJson.koders.filter(koder => koder.gender === genderFilter)
    }

    if (nameFilter){
        const dataToFilter = kodersData || contentJson.koders
        kodersData = dataToFilter.filter(koder => koder.name === nameFilter)
    }

    if(count){
        dataToFilter = kodersData || contentJson.koders
        kodersData = dataToFilter.splice(0,count)
    }

    contentJson.koders = kodersData || contentJson.koders

    response.json(contentJson.koders)
})

router.post('/', (request, response)=>{
    const name = request.body.name
    const gender = request.body.gender

    const newKoder = {name : name, gender: gender}

    const content = fs.readFileSync('koders.json', 'utf8')
    const contentJson = JSON.parse(content)

    contentJson.koders.push(newKoder)

    fs.writeFileSync('koders.json', JSON.stringify(contentJson, null, 2), 'utf8')
    response.json({success: true, data : contentJson})
})

module.exports = router