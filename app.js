const express = require("express")
const app = express()
const morgan = require("morgan")//dev midllwares
const userRouter = require("./routes/userRoutes")//routes handlers
//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use("/userdata", userRouter)
module.exports = app