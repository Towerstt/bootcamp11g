const express = require('express')
const mentors = require('../usecases/mentors')
const router = express.Router()
router.use(express.json())

router.get('/', async (request, response) =>{
    try{
        const allMentors = await mentors.getAll()

        response.json({
            success : true,
            msj : 'All mentors got',
            data : {
                mentors : allMentors
            }
        })
    }
    catch (error){
        response.status(400)
        response.json({
            success : false,
            msj : 'Cannot got mentors',
            error : error.message
        })
    }
})

router.post('/', async (request, response) => {
    try{
        const mentorToPost = request.body

        const newMentor = await mentors.create(mentorToPost)
        response.json({
            msj: 'Mentor posted successfully',
            success: true,
            data: {
                MentorPosted: newMentor
            }
        })}
    catch (error){
        response.status(404)
        response.json({
            msj : "Unavailable to post",
            success : false,
            error : error.message
        })
    }
})

router.delete('/:id', async (request, response) => {
    try{
        const mentorID = request.url.replace('/','')
        const mentorDeleted = await mentors.deleteByID(mentorID)
        response.json({
            success: true,
            msj: 'Mentor deleted successfully',
            data : {
                data : mentorDeleted
            }
        })
    }
    catch{
        response.json({
            success: false,
            msj: 'Mentor does not exist',
            error : error.message
        })
    }
})

router.patch('/:id', async (request, response) =>{
    try {
        const id = request.params.id
        const newData = request.body
        const mentorUpdated = await mentors.updateByID(id, newData)
        response.json({
            success: true,
            msj: 'Mentor updated successfully',
            data : {
                mentor: mentorUpdated
            }
        })
    } catch (error) {
        response.json({
            success: false,
            msj: 'Mentor could not be updated',
            error : error.message
        })
    }    
})


module.exports = router