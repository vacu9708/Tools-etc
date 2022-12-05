const express = require('express');
const app = express();
const fs = require('fs');
const http = require('http');
const https = require('https');
const routes=require("./routes/routes.js");
const socket=require("./controller/socket.js");
const path=require('path')


app.use(express.json()); // to accept json data
const react_path=path.join(__dirname,'../client/build')
app.use(express.static(react_path))
// app.use('/icon', path.join(__dirname,'/icons'))
app.use('/', routes.app)

const options = { 
  key: fs.readFileSync('./private.pem'),
  cert: fs.readFileSync('./public.pem'),
}
// const server = http.createServer(app);
const server = https.createServer(options, app);
const port=443
server.listen(port, (err) => {
  if (err) 
    return console.log(err);
  console.log('server running on '+port)
});

const server_socket=socket.init(server)
routes.init(server_socket)