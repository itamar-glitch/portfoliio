const { options } = require("nodemon/lib/config")
const model = require(`./../models/resumeModel`)
class data {
    constructor() {
        // this.queryString = queryString
        this.data = null
        this.resume = null
        // query=this.tour.find()
    }
    findresume = async (req, res) => {
        try {
            this.resume = await model.findOne({ name: req.params.name })
            return this.resume
        } catch (err) {
            res.status(400).json({
                status: "fail",
                message: err
            })
        } finally {
            if (!this.resume) {
                res.status(404).json({ message: "invalid user name" })
                return this.resume
            }
            res.status(200).json({
                status: "sucsess",
                message: this.resume
            })
        }
    }
    dataupdate = async (req, res) => {
        try {
            this.data = await model.create(req.body);
            res.status(200).json({
                status: "sucsess",
                message: this.data
            })

        } catch (err) {
            res.status(400).json({
                status: "fail",
                message: err
            })
        }

    }

}
// filter() {
//     const queryObj = { ...this.queryString }
//     const excludedFields = ['page', 'sort', 'limit', 'fields'];
//     //==========================================================================================
//     // excludedFields.forEach(el => delete queryObj[el])
//     queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
//     let queryStr = JSON.stringify(queryObj);
//     this.query = this.query.find(JSON.parse(queryStr))
//     //==========================================================================================
//     excludedFields.forEach(el => delete queryObj[el])




//     return this
// }

module.exports = data;