// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/PollingSystem_API');

// const db = mongoose.connection;

// db.on("error",console.error.bind(console,"Error occur while making mongoose connection"));

// db.once('open',function(){
//     console.log('mongoose connected');
// })

// module.exports = db;

// Import the mongoose module
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

//Set up default mongoose connection
var mongoDB = process.env.MONGODB_URL;
module.exports = mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("CONNECTION ESTABLISHED"));