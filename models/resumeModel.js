const mongoose = require("mongoose")
const resumeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "i need you name"],
        unique: true
    },
    skils: {
        type: Array
    },
    about: {
        type: String
    },
    age: {
        type: Number
    },

})
const resume = mongoose.model(`resume itamar`, resumeSchema)
module.exports = resume