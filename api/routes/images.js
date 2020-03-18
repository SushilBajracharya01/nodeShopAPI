const express = require('express');
const router = express.Router();
const { upload_image } = require('../controllers/imageController');
const multer  = require('multer');


//Set Storage Engine
const storage = multer.diskStorage({
    destination: './public/images/uploaded_images/',
    filename: function(req, file, cb){
        cb(null, Date.now() + path.extname(file.originalname));
    }
}) 

//Init upload

const upload = multer({
    storage: storage,
}).single('myImage');

router.post('/', function (req, res) {
   // req.file is the name of your file in the form above, here 'uploaded_file'
   // req.body will hold the text fields, if there were any 
   upload(req, res, (err) =>{
    if(err){
        res.status(400).json({err: err})
    }
    else{
        console.log(req.file);
        res.send('success')
    }
   })
   

});
// router.post('/', upload_image);

module.exports = router;