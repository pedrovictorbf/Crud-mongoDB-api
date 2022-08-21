const mongoose = require('mongoose');

mongoose.connect('Insert here mongo Connection String');

let db = mongoose.connection;

module.exports = db;