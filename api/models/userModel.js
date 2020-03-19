var con = require('./mysqlDb');

var User = new Object();

User.signUpUser = function (newUser, result) {
    con.query("Insert into Users set ?", newUser, function(err, res){
        if(err) {
            console.log('SignUP DB error: ', err);
            result(err, res);
        }
        else {
            result(null,res);
        }
    })
}

User.removeUser = function (userId, result) {
    con.query(`DELETE FROM users where userId = ${userId};`,userId, function(err, res) {
        if(err) {
            console.log('RemoveUser DB error: ', err);
            result(err, res);
        }
        else{
            result(null,res);
        }
    })
}

User.findUser = function (user, result) {
    con.query(`Select * from users where email = '${user.email}';`, function(err, res) {
        if(err) {
            console.log('FindUser DB error: ', err);
            result(err, res);
        }
        else{
            result(null,res);
        }
    })
}

module.exports = User;