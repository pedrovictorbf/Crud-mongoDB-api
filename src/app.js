

let express = require('express');

let db = require('../config/MongoConnection.js');
let routes = require('../src/routes/index.js');




db.on("error" , console.log.bind(console, "Connection Error"))
db.once("open", () => {
    console.log('Database Connected')
})


const app = express();
app.use(express.json())
routes(app)



module.exports = app;