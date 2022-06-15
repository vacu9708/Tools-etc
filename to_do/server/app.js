const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('./models/User');
const Todo = require('./models/Todo');
const bcrypt = require('bcrypt');
const path = require('path')

// MongoDB connection
const connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose.connect('mongodb://localhost:27017/auth_todo2',
                  connectionParams);

app.use(cors());
app.use((bodyParser.json()));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/..', '/client/build'))) // React path

// app.get('/', (req, res) => { // Any route that is not handled in express will be redirected to react router
//   console.log(req.ip)
//   res.send('ok')
// })

app.get('/todos', (req, res) => {
  jwt.verify(req.headers.token, 'secretkey', (err, decoded) => {
    if (err) 
      return res.status(401).json({
      title: 'not authorized'
    });

    // Now token is proved to be valid
    Todo.find({ author: decoded.userId }, (err, todos) => {
      if (err) 
        return res.status(201).json({
          title: 'error',
          error: err
        })

      return res.status(200).json({
        title: 'success',
        todos: todos
      });
    })
  })
})

app.get('/all_users', (req, res)=>{
  User.find({}, (err, users) => {
    if (err) 
        return console.log(err);

    return res.status(200).json({
      title: 'success',
      users: users
    });
  })
})

app.post('/signup', (req, res) => {
  const newUser = new User({ // New document
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 10), // Encryption
    name: req.body.name
  });

  newUser.save(err => {
    if (err) { // Duplicate not allowed
      return res.status(201).json({
        error: 'ID already in use'
      })
    }

    return res.status(200).json({
      title: 'User successfully added'
    })
  })
});

app.post('/login', (req,res) => {
  User.findOne({ username: req.body.username}, (err, user) => {
    if (err) {
      return res.status(500).json({
        error: err
      })
    }
    if (!user){
      return res.status(201).json({
        error: 'Invalid username or password'
      })
    }
    if (!bcrypt.compareSync(req.body.password, user.password)){
      return res.status(202).json({
        error: 'Invalid username or password'
      })
    }

    // authentication is done, give them a token
    let token = jwt.sign({ userId: user._id}, 'secretkey');
    return res.status(200).json({
      title: 'Login successful',
      token: token,
      name: user.name
    });
  })
});

app.post('/todo',(req, res) => {
  // verify
  jwt.verify(req.headers.token, 'secretkey', async (err, decoded) => {
    if (err) 
      return res.status(401).json({
      title: 'not authorized'
    });

    // Putting to-do in user
    // let new_todo={
    //   title: req.body.title,
    //   isCompleted: false
    // }
    //await User.updateOne({_id: decoded.userId}, {$push: {todos: new_todo}})

    let newTodo = new Todo({
      title: req.body.title,
      isCompleted: false,
      author: decoded.userId
    });

    newTodo.save(error => {
      if (error) 
        return console.log(error);
      return res.status(200).json({
        title: "successfully added",
        todo: newTodo
      })
    })
  })
});

app.patch('/todo/:todoId', (req, res) => { // Update isComplete
  jwt.verify(req.headers.token, 'secretkey', async (err, decoded) => {
    if (err)
      return res.status(401).json({
      title: 'not authorized'
    });

    // Now token is proved to be vaild
    Todo.findOne({ author: decoded.userId, _id: req.params.todoId }, (err, todo) => {
      if (err) 
        console.log(err)
      
      todo.isCompleted = req.body.isCompleted

      todo.save(error => {
        if (error) 
          console.log(error);

        // Save
        return res.status(200).json({
          todo: todo
        })
      })
    });
  })
})

app.patch('/user', (req, res)=>{ // Editing profile
  jwt.verify(req.headers.token, 'secretkey', (err, decoded) =>{
    User.findOne({_id: decoded.userId}, (err, user)=>{

      user.name=req.body.nameToChange
      user.save(err =>{
        return res.status(200).json({
          title:'success',
        })
      })
    })
  })
})

app.delete("/todo/:todoId", async (req, res) => { // Delete a to-do
  jwt.verify(req.headers.token, 'secretkey', async (err, decoded) => {
    if (err) // Token error
      return res.status(401).json({
        title: 'not authorized'
    });

    Todo.findByIdAndDelete(req.params.todoId, (err, todo)=>{
      if(err) // DB error
        return console.log(err)
      //console.log(todo)
      return res.status(200).json({
        title: 'success'
        //todo: todo
      })
    });
  })
});

app.get('/user', (req, res) => {
  jwt.verify(req.headers.token, 'secretkey', (err, decoded) => {
    if (err) 
      return res.status(201).json({
      title: 'not authorized'
    });

    // now we know token is valid
    User.findOne({ _id: decoded.userId }, (err, user) => {
      if (err) 
        return console.log(err)

      return res.status(200).json({
        username: user.username,
        name: user.name
      })
    })
  })
})

const port = process.env.PORT || 4000;
app.listen(port, (err) => {
  if (err) 
    return console.log(err);
  console.log('Server running on port: ', port);
});