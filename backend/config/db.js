const mongoose = require('mongoose')
const connectionParams = {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}
function dbconnect() {
    console.log(process.env.MONGOO_URI);
    mongoose.connect(process.env.MONGOO_URI, connectionParams)
        .then(() => {
            console.log(1);
            console.log('Connected to the database ')
        })
        .catch((err) => {
            console.error(`Error connecting to the database. n${err}`);
            console.log(2);
        })
}


module.exports = dbconnect