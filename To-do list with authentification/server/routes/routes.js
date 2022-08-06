const express = require('express');
const app = express();
const router=express.Router()
const controller=require("../controller/controller.js")
const multer = require('multer'); // For image uploading
const fs = require('fs'); // To delete files

// storage for images
const storage = multer.diskStorage({
    // destination of file
    destination: function (req, file, callback) {
      callback(null, './uploads/images');
    },
  
    // decide filename
    filename: function (req, file, callback) {
      callback(null, Date.now() + file.originalname);
    }
})
  
// parameter for image upload
const upload = multer({
    storage: storage,
    limits: {
        fieldSize: 1024 * 1024 * 3,
    },
})

router.get('/todos', controller.get_todos)
router.get('/all_users', controller.get_all_users)
router.get('/user', controller.get_user)
router.post('/signup', upload.single('profileImg'), controller.sign_up)
router.post('/login', controller.login)
router.post('/todo', controller.post_todo)
router.patch('/user', upload.single('profileImg'), controller.patch_user)
router.patch('/todoIsCompleted/:todoId', controller.patch_is_completed)
router.patch('/todoTitle/:todoId', controller.patch_todo_title)
router.delete("/todo/:todoId", controller.delete_todo)
  
router.get('/*', function(req, res) { // React router
    res.sendFile(path.join(__dirname, '/..', '/client/build/index.html'), err=>{
        if (err) 
            res.status(500).send(err)
    })
})

module.exports = router;