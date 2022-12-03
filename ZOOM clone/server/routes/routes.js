const express = require('express');
const app = express();
const controller=require("../controller/controller.js")
const path=require('path');
const { dirname } = require('path');

app.get('/create_room', controller.create_room)
  
app.get('/*', function(req, res) { // React
    const path_=path.join(__dirname,'../../client/build/index.html')
    res.sendFile(path_, err=>{
        if (err) 
            res.status(500).send(err)
    })
})

module.exports = app;