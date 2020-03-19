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