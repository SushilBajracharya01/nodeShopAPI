var con = require('./mysqlDb');


//Product object constructor.
var Product = function(product) {
    this.name = product.name;
    this.price = product.price;
}


Product.insertNewProduct = function(newProduct, result) {
    con.query("Insert into products set ?", newProduct, function(err, res) {
        if(err) {
            console.log('error: ', err);
        }
        else {
            result(null,res);
        }
    } )
}

module.exports = Product;