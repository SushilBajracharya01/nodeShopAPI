const express= require('express');

const router = express.Router();

const { signUP_user, remove_user, login_user } = require('../controllers/userController');


router.post('/signup', signUP_user);
router.post('/login', login_user)
router.post('/:userId', remove_user);

module.exports= router;