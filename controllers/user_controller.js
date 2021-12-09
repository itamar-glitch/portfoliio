const resume = require("./../models/resumeModel")
const data = require("../utils/dataClass")
const { options } = require("nodemon/lib/config")
let database = new data()
exports.updateUserData = async (req, res) => {
    console.log(req.body)
    currentuser = database.dataupdate(req, res)
}
exports.getUserData = async (req, res) => {
    updatedata = database.findresume(req, res)

}