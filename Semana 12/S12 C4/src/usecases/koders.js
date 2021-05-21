const Koders = require('../models/koders')

function getAll () {
    return Koders.find({})
}

function postNewKoder (koderToCreate) {
    return Koders.create(koderToCreate)
}

function deleteByID (koderID){
    return Koders.findByIdAndRemove(koderID)
}
module.exports = {
    getAll,
    postNewKoder,
    deleteByID
}