var User = require('../models/userModel');
const bcrypt = require('bcrypt');
var validator = require("email-validator");

exports.signUP_user = (req, res) => {
    var newUser = req.body;
    var responseIsNotEmpty = newUser.email && newUser.password;
    if (responseIsNotEmpty) {
        var emailIsValid = validator.validate(newUser.email);
        console.log(emailIsValid);
        if( emailIsValid ) {
            bcrypt.hash(newUser.password, 10, (err, hash) => {
                if (err) {
                    return res.status(500).json({
                        error: err
                    });
                }
                else {
                    newUser.password = hash;
                    User.signUpUser(newUser, (err, result) => {
                        if (err) {
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
            });
        }
        else {
            res.status(422).json({
                message: 'Invalid Email'
            })
        }
        
    }
    else {
        res.status(400).send({ error: true, message: 'Email and password must not be null' });
    }
}

exports.login_user = (req, res) => {
    var userEmail = req.body.email;
    console.log(userEmail)

    User.findUser(userEmail, (err, result) => {
        if(err) {
            res.send(err);
        }
        else{
            if(result.length === 0){
                res.send(404).json({error: 'User doesnot exits'})
            }
            else{
                res.status(400).json({result:result});
                //assign jwt
            }
        }
    })
}


exports.remove_user = (req, res) => {
    User.removeUser(req.params.userId, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.status(200).json({
                message: 'User removed',
                result: result
            })
        }
    })
}