const express = require('express')
const koders = require('../usecases/koders')
const router = express.Router()
router.use(express.json())

router.get('/', async (request, response) =>{
    try{
        const allKoders = await koders.getAll()

        response.json({
            success : true,
            msj : 'All koders got',
            data : {
                koders : allKoders
            }
        })
    }
    catch (error){
        response.status(400)
        response.json({
            success : false,
            msj : 'Cannot got koders',
            error : error.message
        })
    }
})

router.post('/', async (request, response) => {
    try{
        const koderToPost = request.body
        console.log(request.body)

        const newKoder = await koders.postNewKoder(koderToPost)
        response.json({
            msj: 'Koder posted successfully',
            success: true,
            data: {
                koderPosted: newKoder
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
        const koderID = request.url.replace('/','')
        const koderDeleted = await koders.deleteByID(koderID)
        response.json({
            success: true,
            msj: 'Koder deleted successfully',
            data : koderDeleted
        })
    }
    catch{
        response.json({
            success: false,
            msj: 'Koder does not exist',
            error : error.message
        })
    }
})


module.exports = router