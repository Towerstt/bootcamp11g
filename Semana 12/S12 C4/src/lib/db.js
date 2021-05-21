const mongoose = require('mongoose')

const DB_PROTOCOL = 'mongodb+srv:'
const DB_USER = 'towers'
const DB_PASSWORD = '102030'
const DB_HOST = 'kodemiahtc.hhcjc.mongodb.net'
const DB_NAME = 'kodemia'
const url = `${DB_PROTOCOL}//${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`


function connect (){
    return mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:true})
}

module.exports = connect