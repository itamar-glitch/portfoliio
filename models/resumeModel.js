const mongoose = require("mongoose")
const resumeSchema = new mongoose.Schema({
    name: {
        type=String,
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