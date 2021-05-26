const mongoose = require('mongoose')
const usersSchema = new mongoose.Schema({
    name : {
        type : String,
        minLength : 2,
        maxLength : 20,
        match : /\w/,
        required : true
    },
    email : {
        type : String,
        maxLength : 100,
        match : /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
        required : true
    },
    password : {
        type : String,
        minLength : 1,
        required : true
    },
    role : {
        type : [String],
        enum : ['admin', 'user'],
        minLength : 1,
        required : true
    }
})

const model = mongoose.model('users', usersSchema)
module.exports = model