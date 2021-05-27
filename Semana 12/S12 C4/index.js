require('dotenv').config() //Debe FORZOSAMENTE ser la primer línea del index
//Acceder a las variables de entorno - Del sistema y del archivo .env --> process.env

const server = require('./src/server')
const dbConnect = require('./src/lib/db')

dbConnect()
    .then(() =>{
        console.log('DB Connected')
        server.listen(8080, () => console.log('SERVER is ready and listening...'))
    })
    .catch((error) =>{
        console.error('DB Connection ERROR : ', error)
    })