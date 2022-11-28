const express = require('express');
const app = express();
const fs = require('fs');
const http = require('http');
const routes=require("./routes/routes.js");


app.use(express.json()); // to accept json data
//app.use(express.static(path.join(__dirname, '..', 'client/build'))) // React build
app.use('/', routes)

const http_server = http.createServer(app);
http_server.listen(4000, (err) => {
  if (err) 
    return console.log(err);
  console.log('Server running on port: ', 4000);
});

module.exports={http_server}