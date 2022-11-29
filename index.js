const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const dotenv = require('dotenv').config();
const db = require('./config/mongoose');
// const bodyParser = require('body-parser');

// Used to received form data in req.body
app.use(express.urlencoded({extended:true}));

app.use('/',require('./router'));

app.listen(port , function(err){
    if(err){ console.log("Error occur while loading server")}
    console.log("Server runnig of API at port ",port);
})