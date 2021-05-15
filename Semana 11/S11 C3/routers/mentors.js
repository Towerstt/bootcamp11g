const fs = require('fs')
const express = require('express')
const router = express.Router()


router.get('/:id', (request, response) =>{
    const id = parseInt(request.params.id)
    const content = fs.readFileSync('koders.json', 'utf8')
    const contentJson = JSON.parse(content)
    const mentorGot = contentJson.mentors.filter(mentor => mentor.id === id)
    console.log(mentorGot)
    if (!mentorGot){
        response.status(404)
        response.json({
            success: false,
            message: 'Mentor not found'
        })
        return
    } 
    response.json(mentorGot)
})

router.delete('/:id', (request, response) =>{
    const id = parseInt(request.params.id)
    const content = fs.readFileSync('koders.json', 'utf8')
    const contentJson = JSON.parse(content)
    const newMentors = contentJson.mentors.filter(mentor => mentor.id !== id)
    contentJson.mentors = newMentors
    fs.writeFileSync('koders.json', JSON.stringify(contentJson,null,2), 'utf8')
    response.json({success : true})

})

router.get('/', async (request,response) =>{
    const moduleFilter = request.query.module
    const count = parseInt(request.query.count) || 0
    const nameFilter = request.query.name
    const content = fs.readFileSync('koders.json', 'utf8')
    const contentJson = JSON.parse(content)

    let mentorsData = null
    
    if(moduleFilter){
        mentorsData = contentJson.mentors.filter(mentor => mentor.module === moduleFilter)
    }

    if (nameFilter){
        const dataToFilter = mentorsData || contentJson.mentors
        mentorsData = dataToFilter.filter(mentor => mentor.name === nameFilter)
    }

    if(count){
        dataToFilter = mentorsData || contentJson.mentors
        mentorsData = dataToFilter.splice(0,count)
    }

    contentJson.mentors = mentorsData || contentJson.mentors

    response.json(contentJson.mentors)
})

router.post('/', (request, response)=>{
    const name = request.body.name
    const module = request.body.module

    const newMentor = {name : name, module: module}

    const content = fs.readFileSync('koders.json', 'utf8')
    const contentJson = JSON.parse(content)

    contentJson.mentors.push(newMentor)

    fs.writeFileSync('koders.json', JSON.stringify(contentJson, null, 2), 'utf8')
    response.json({success: true, data : contentJson})
})


router.patch('/:id', async (request,response) =>{
    const id = parseInt(request.params.id)
    // const moduleFilter = request.query.module
    // const nameFilter = request.query.name
    const content = fs.readFileSync('koders.json', 'utf8')
    const contentJson = JSON.parse(content)

    let mentorsData = null
    
    let mentorToEdit = contentJson.mentors.reduce((accum, curr) =>{
        if (curr.id === id){
            curr.name = request.body.name || curr.name
            curr.module = request.body.module || curr.module
        }
        return [...accum, curr ]
    },[])

    contentJson.mentors = mentorToEdit

    
    fs.writeFileSync('koders.json', JSON.stringify(contentJson, null, 2), error => {
        if (error) {
            console.error('ERROR: ', error)
            response.status(401);
            response.end()
        }
    })

    response.json(contentJson.mentors)
})


module.exports = router