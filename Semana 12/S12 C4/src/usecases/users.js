const Users = require('../models/users')
const bcrypt = require('../lib/bcrypt')
const jwt = require('../lib/jwt')

function getAll (){
    return Users.find({})
}

function getById (id) {
    return Users.findById(id)
}

async function signUp ({name , email, password, role}) {
    const userFound = await Users.findOne({email})

    if (userFound) {
        //Lanzar un error - Si se ejecuta el throw, se corta la ejecución
        throw new Error('User already exists')
    }

    const encryptedPassword = await bcrypt.hash(password)
    return Users.create({name , email , password : encryptedPassword, role})
}

function deleteByID (userID) {
    return Users.findByIdAndRemove(userID)
}

async function login (email, password) {
    const userFound = await Users.findOne({email})

    if (!userFound) {
        throw new Error('Invalid data')
    }
    const isValidPsw = await bcrypt.compare(password, userFound.password) //Regresa un true si son iguales

    if (!isValidPsw) throw  new Error ('Invalid data')

    return jwt.sign({ id : userFound._id})
}



module.exports = {
    getAll,
    signUp,
    deleteByID,
    login,
    getById
}