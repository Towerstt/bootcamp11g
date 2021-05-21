const server = require('./src/server')
const dbConnect = require('./src/lib/db')
const koderModel = require('./src/models/koders')




dbConnect()
    .then(() =>{
        console.log('DB Connected')
        server.listen(8080, () => console.log('SERVER is ready and listening...'))
    })
    .catch((error) =>{
        console.error('DB Connection ERROR : ', error)
    })