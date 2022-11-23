const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/PollingSystem_API');

const db = mongoose.connection;

db.on("error",console.error.bind(console,"Error occur while making mongoose connection"));

db.once('open',function(){
    console.log('mongoose connected');
})

module.exports = db;