//Este archivo aloja la definición de nuestro servidor

const express = require('express')
const cors = require('cors')
const kodersRouter = require('./routers/koders')
const mentorsRouter = require('./routers/mentors')
const usersRouter = require('./routers/users')
const middleware = require('./middlewares/koders')
const app = express()

app.use(cors())
app.use(middleware)
app.use('/koders', kodersRouter)
app.use('/mentors', mentorsRouter)
app.use('/users', usersRouter)










module.exports = app