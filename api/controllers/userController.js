var User = require('../models/userModel');


exports.signUP_user = (req, res, next) => {
    var newUser = req.body;

    var responseIsValid = newUser.email && newUser.password;

    if( responseIsValid ) {
        User.signUpUser(newUser, (err, result) => {
            if(err){
                res.send(err);
            }
            else {
                res.status(201).json({
                    message: 'New User added',
                    result: result
                })
            }
        })
    }
    else{
        res.status(400).send({error: true, message: 'Email and password must not be null'});
    }
}