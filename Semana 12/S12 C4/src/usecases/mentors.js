const Mentors = require('../models/mentors')

function getAll () {
    return Mentors.find({})
}

function create (mentorToCreate) {
    return Mentors.create(mentorToCreate)
}

function deleteByID (mentorID){
    return Mentors.findByIdAndRemove(mentorID)
}

function updateByID(mentorID, newData){
    return Mentors.findByIdAndUpdate(mentorID, newData)
}
module.exports = {
    getAll,
    create,
    deleteByID,
    updateByID
}