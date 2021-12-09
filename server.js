const mongoose = require("mongoose")//database
const dotenv = require("dotenv")
dotenv.config({ path: './config.env' });
const app = require("./app")
//data base initial
const db = process.env.DATABASE.replace(`<password>`, process.env.DATABASE_PASSWORD)
mongoose
    .connect(db, {
        useNewUrlParser: true
    })
    .then(() => console.log('DB connection successful!')).catch(err => console.log(err))
const port = process.env.port || 3000
app.listen(port, () => {
    console.log(`listening to port ${port}...`)
});