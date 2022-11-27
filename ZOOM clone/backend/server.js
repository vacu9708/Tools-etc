const express = require('express');
const app = express();
const path = require('path')
const routes=require("./routes/routes.js");


app.use(express.json()); // to accept json data
//app.use(express.static(path.join(__dirname, '..', 'client/build'))) // React build
app.use('/uploads/images', express.static(path.join(__dirname,'uploads/images')))
app.use('/', routes)

app.listen(4000, (err) => {
  if (err) 
    return console.log(err);
  console.log('Server running on port: ', 4000);
});