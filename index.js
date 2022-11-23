const express = require('express');
const app = express();
const port = 8000;

app.listen(port , function(err){
    if(err){ console.log("Error occur while loading server")}
    console.log("Server runnig of API at port ",port);
})