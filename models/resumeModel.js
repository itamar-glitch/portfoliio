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
    professional_experience: {
        type: String
    },
    age: {
        type: Number
    },
    summary: {
        type: String
    },

})
const resume = mongoose.model(`resume of ${process.env.USERNAME_DATA} `, resumeSchema)
module.exports = resume