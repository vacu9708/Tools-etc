const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcrypt');
const Todo = require('./models/Todo');
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

// get todo route
app.get('/todos', (req, res) => {
  // verify
  jwt.verify(req.headers.token, 'secretkey', (err, decoded) => {
    if (err) return res.status(401).json({
      title: 'not authorized'
    });

    // now we know token is valid
    Todo.find({ author: decoded.userId }, (err, todos) => {
      if (err) 
        return res.status(400).json({
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
      return res.status(400).json({
        title: 'error',
        error: 'Email already in use'
      })
    }
    return res.status(200).json({
      title: 'user successfully added'
    })
  })
});

app.post('/login', (req,res) => {
  console.log('login attempt')
  User.findOne({ username: req.body.username}, (err, user) => {
    if (err) 
      return res.status(500).json({
        title: 'server error',
        error: err
      });
    if (!user)
      return res.status(400).json({
        title: 'user is not found',
        error: 'invalid username or password'
      })
    if (!bcrypt.compareSync(req.body.password, user.password))
      return res.status(401).json({
        title: 'login failed',
        error: 'invalid username or password'
      })

    // authentication is done, give them a token
    let token = jwt.sign({ userId: user._id}, 'secretkey');
    return res.status(200).json({
      title: 'login successful',
      token: token,
      name: user.name
    });
  })
});

// add todo route
// mark todo as completed route
app.post('/todo',(req, res) => {
  // verify
  jwt.verify(req.headers.token, 'secretkey', (err, decoded) => {
    if (err) 
      return res.status(401).json({
      title: 'not authorized'
    });

    let newTodo = new Todo({
      title: req.body.title,
      isCompleted: false,
      author: decoded.userId
    });

    newTodo.save(error => {
      if (error) return console.log(error);
      return res.status(200).json({
        title: "successfully added",
        todo: newTodo
      })
    })
  })
});

app.patch('/todo/:todoId', (req, res) => { // Update is_complete
  jwt.verify(req.headers.token, 'secretkey', (err, decoded) => {
    if (err)
      return res.status(401).json({
      title: 'not authorized'
    });

    // now we know token is valid
    Todo.findOne({ author: decoded.userId, _id: req.params.todoId }, (err, todo) => {
      if (err) 
        return console.log(err);

      todo.isCompleted = req.body.isCompleted;
      todo.save(error => {
        if (error) 
          return console.log(error);

        // Save
        return res.status(200).json({
          title: 'success',
          //todo: todo
        });
      });
    })
  })
})

app.patch('/user/:userId', (req, res)=>{ // user modification
  jwt.verify(req.headers.token, 'secretkey', (err, decoded) =>{
    User.findOne({_id: decoded.userId}, (err, user)=>{

      user.name=req.body.name_to_change
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

    await Todo.findByIdAndDelete(req.params.todoId, (err, todo)=>{
      if(err) // DB error
        return console.log(err)
      //console.log(todo)
      return res.status(200).json({
        title: 'success'
        //todo: todo
      })
    }); // does NOT work without await
  })
});

// app.get('/user', (req, res) => {
//   let token = req.headers.token;
//   // verify
//   jwt.verify(token, 'secretkey', (err, decoded) => {
//     if (err) return res.status(401).json({
//       title: 'not authorized'
//     });

//     // now we know token is valid
//     User.findOne({ _id: decoded.userId }, (err, user) => {
//       if (err) return console.log(err);
//       return res.status(200).json({
//         title: 'success',
//         user: {
//           username: user.username
//         }
//       })
//     })
//   })
// })

// const requireToken = (req, res, next) => {
//   jwt.verify(req.headers.token, 'secretkey', (err, decoded) => {
//     if (err) return res.status(401).json({
//       title: 'not authorized'
//     });
//   })
//   next();
// }

const port = process.env.PORT || 4000;
app.listen(port, (err) => {
  if (err) 
    return console.log(err);
  console.log('Server running on port: ', port);
});