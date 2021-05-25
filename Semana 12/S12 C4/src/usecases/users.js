const Users = require('../models/users')
const bcrypt = require('../lib/bcrypt')

function getAll (){
    return Users.find({})
}

async function signUp ({name , email, password}) {
    const userFound = await Users.findOne({email})

    if (userFound) {
        //Lanzar un error - Si se ejecuta el throw, se corta la ejecución
        throw new Error('User already exists')
    }

    const encryptedPassword = await bcrypt.hash(password)
    return Users.create({name , email , password : encryptedPassword})
}

function deleteByID (userID) {
    return Users.findByIdAndRemove(userID)
}


module.exports = {
    getAll,
    signUp,
    deleteByID
}