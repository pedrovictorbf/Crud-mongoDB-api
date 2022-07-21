const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin123@testemongo.tnhk3.mongodb.net/testeMongo');

let db = mongoose.connection;

module.exports = db;