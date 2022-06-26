const jwt = require('jsonwebtoken');
const Todo = require('../models/Todo');
const User = require('../models/User');
const bcrypt = require('bcrypt'); // For encryption

const get_todos = async (req, res) => {
    jwt.verify(req.headers.token, 'secretkey', (err, decoded) => {
        if (err) 
        return res.status(401).json({
            error: 'Not authorized'
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
}

const get_all_users = async (req, res)=>{
    User.find({}, (err, users) => {
      if (err) 
          return console.log(err);
  
      return res.status(200).json({
        title: 'success',
        users: users
      });
    })
}

const get_user=async (req, res) => {
    jwt.verify(req.headers.token, 'secretkey', (err, decoded) => {
        if (err) 
        return res.status(201).json({
            error: 'Not authorized'
        });

        // Now token is proved to be valid
        User.findOne({ _id: decoded.userId }, (err, user) => {
        if (err) 
            return console.log(err)

        return res.status(200).json({
            username: user.username,
            name: user.name,
            profileImg: user.img
        })
        })
    })
}

const sign_up=async (req, res) => {
    const newUser = new User({ // New document
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password, 10), // Encryption
      name: req.body.name,
      img: req.body.profileImg!==''? req.file.filename : ''
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
}

const login=async (req,res) => {
    console.log(req.body)
    User.findOne({username: req.body.username}, (err, user) => {
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
  
      // Authentication is done, give a token
      let token = jwt.sign({ userId: user._id}, 'secretkey');
      return res.status(200).json({
        title: 'Login successful',
        token: token,
        name: user.name
      });
    })
}

const post_todo=async (req, res) => {
    // verify
    jwt.verify(req.headers.token, 'secretkey', async (err, decoded) => {
      if (err) 
        return res.status(401).json({
        title: 'not authorized'
      });
  
      // Putting to-do in user model
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
}

const patch_user=async (req, res)=>{ // Editing profile
    jwt.verify(req.headers.token, 'secretkey', (err, decoded) =>{
      if (err){
        console.log(err)
        return res.status(401).json({
        title: 'Not authorized'
        })
      }
  
      User.findOne({_id: decoded.userId}, (err, user)=>{
        user.name=req.body.nameToChange
  
        if(req.body.profileImg !== ''){ // If there's a new profile image
          fs.unlink("./uploads/images/"+user.img, err => { // Delete the previous profile image
            if(err)
                console.log(err)
          })
          user.img=req.file.filename // New profile image
        }
  
        user.save(err =>{
          return res.status(200).json({
            title:'success'
          })
        })
      })
    })
}

const patch_is_completed=async (req, res) => { // Update isComplete
    jwt.verify(req.headers.token, 'secretkey', async (err, decoded) => {
      if (err){
        console.log(err)
        return res.status(401).json({
        title: 'Not authorized'
        })
      }
  
      // Now token is proved to be vaild
      Todo.findOne({ author: decoded.userId, _id: req.params.todoId }, (err, todo) => {
        if (err) 
          console.log(err)
        
        todo.isCompleted = !todo.isCompleted
  
        todo.save(error => {
          if (error) 
            console.log(error)
  
          return res.status(200).json({
            todo: todo
          })
        })
      })
    })
}

const delete_todo=async (req, res) => { // Delete a to-do
    jwt.verify(req.headers.token, 'secretkey', async (err, decoded) => {
      if (err) // Token error
        return res.status(201).json({
          title: 'Not authorized'
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
}

const patch_todo_title=async (req, res) => { // Update isComplete
    jwt.verify(req.headers.token, 'secretkey', async (err, decoded) => {
      if (err)
        return res.status(401).json({
        title: 'not authorized'
      });
  
      // Now token is proved to be vaild
      Todo.findOne({ author: decoded.userId, _id: req.params.todoId }, (err, todo) => {
        if (err) 
          console.log(err)
        
        todo.title = req.body.newTitle
  
        todo.save(error => {
          if (error) 
            console.log(error)
  
          return res.status(200).json({
            todo: todo
          })
        })
      })
    })
}

module.exports = {
    get_todos: get_todos,
    get_all_users: get_all_users,
    get_user: get_user,
    sign_up: sign_up,
    login: login,
    post_todo: post_todo,
    patch_user: patch_user,
    patch_todo_title: patch_todo_title,
    patch_is_completed: patch_is_completed,
    patch_todo_title: patch_todo_title,
    delete_todo: delete_todo
}