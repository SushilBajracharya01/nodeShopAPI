var con = require('./mysqlDb');


var Product=new Object();

Product.insertNewProduct = function(newProduct, result) {
    con.query("Insert into products set ?", newProduct, function(err, res) {
        if(err) {
            console.log('DB error: ', err);
            result(err,res);
        }
        else {
            result(null,res);
        }
    } )
}

Product.getAllProducts = function(result) {
    con.query("Select * from products", (err, res) => {
        if(err) {
            console.log('DB error: ', err);
            result(err,res);
        }
        else {
            result(null, res);
        }
    })
}


Product.getProductById = function(id,result) {
    con.query("Select * from products where productID = ?", id, (err, res) => {
        if(err) {
            console.log('DB error: ', err);
            result(err,res);
        }
        else {
            result(null, res);
        }
    })
}

Product.deleteProductById = function ( id, result ) {
    con.query("Delete from products where productId = ?", id, (err, res) => {
        if(err) {
            console.log('DB error: ', err);
            result(err,res);
        }
        else {
            result(null, res);
        }
    })
}

module.exports = Product;