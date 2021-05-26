const express = require('express')
const users = require('../usecases/users')
const router = express.Router()


router.post('/', async (request, response) =>{
    try {
        const newUser = await users.signUp(request.body)
        response.json({
            success : true,
            msg : 'User registered successfully',
            data : {
                user : newUser
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success : false,
            msg : 'Could not register',
            error : error.message
        })
    }
})

router.get('/', async (request, response) =>{
    try {
        const allUsers = await users.getAll()
        response.json({
            success : true,
            msg : 'Users got successfully',
            data : {
                users: allUsers
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success : false,
            msg : 'Could not get users',
            error : error.message
        })
    }
})

router.delete('/:id', async (request, response) =>{
    try {
        const userDeleted = await users.deleteByID(request.url.replace('/',''))
        response.json({
            success : true,
            msg : 'User deleted successfully',
            data : userDeleted
        })
    } catch (error) {
        response.status(400)
        response.json({
            success : false,
            msg : 'Could not delete user',
            error : error.message
        })
    }
})


router.post('/login', async (request, response) =>{
    try {
        const {email, password} = request.body
        const token = await users.login(email, password)

        response.json({
            success : true,
            msg : 'Logged in',
            data : {
                token
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success : false,
            msg : 'Could not log in',
            error : error.message
        })
    }
})

module.exports = router