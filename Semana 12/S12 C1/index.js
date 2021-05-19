const mongoose = require('mongoose')
const DB_USER = 'towers'
const DB_PASSWORD = '102030'
const DB_HOST = 'kodemiahtc.hhcjc.mongodb.net'
const DB_NAME = 'kodemia'
const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

const koderSchema = new mongoose.Schema({
    name : {
        type : String,
        minLength : 2,
        maxLength : 100,
        required : true
    },
    lastName : {
        type : String,
        minLength : 2,
        maxLength : 100,
        required : true
    },
    age : {
        type : Number,
        min : 0,
        required : true
    },
    gender : {
        type : String,
        enum : ['m' , 'f'], //Valores posibles, todos los demás los rechaza
        required : true
    }
})

const Koder = mongoose.model('koders', koderSchema)

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((conection) => {
        // Koder.find({})
        //     .then((response) => console.log('Koders Found : ', response))
        //     .catch((error) => console.error('ERROR : ', error))
        Koder.create({name : 'Mario', lastName : 'Andrade', age : 21 , gender : 'm'})
            .then((response) => console.log('Koder created successfully : ', response))
            .catch((error) => console.error('ERROR : ', error))
    })
    .catch((error) => console.error('ERROR : ', error))