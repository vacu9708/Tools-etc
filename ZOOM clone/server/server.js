const express = require('express');
const app = express();
const fs = require('fs');
const http = require('http');
const https = require('https');
const routes=require("./routes/routes.js");
const socket=require("./controller/socket.js");
const path=require('path')


app.use(express.json()); // to accept json data
const path_=path.join(__dirname,'../client/build')
app.use(express.static(path_)) // React build
app.use('/', routes)

const options = { 
  key: fs.readFileSync('./private.pem'),
  cert: fs.readFileSync('./public.pem'),
}
// const server = http.createServer(app);
const server = https.createServer(options, app);
server.listen(4000, (err) => {
  if (err) 
    return console.log(err);
  console.log('Server running on port: ', 4000);
});

socket.init(server)