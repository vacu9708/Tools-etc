const express = require('express');
const app = express();
const controller=require("../controller/controller.js")

app.get('/create_room', controller.create_room)
  
// app.get('/*', function(req, res) { // React
//     res.sendFile(path.join(__dirname, '/..', '/client/build/index.html'), err=>{
//         if (err) 
//             res.status(500).send(err)
//     })
// })

module.exports = app;