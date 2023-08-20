require("dotenv").config();
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const dbconnect = require('./config/db')
const userRoutes = require('./Routes/User')
const adminRoutes = require('./Routes/Admin')
app.use(bodyParser.json())

app.use('/user', userRoutes)
app.use('/admin', adminRoutes)
console.log(process.env.PROT);
app.listen(process.env.PROT, () => {
    dbconnect()

    console.log("app is listning");
    console.log(bodyParser);
})