var Product = require('../models/appModel');

exports.insert_product = (req, res) =>{ 
    var newProduct = new Product(req.body);
    console.log(newProduct, 'new product')
    console.log(Product.insertNewProduct)
    //handles null error
    if(!newProduct) {
        res.status(400).send({error: true, message: 'Empty res'})
    }
    else {
        Product.insertNewProduct(newProduct,function(err, task) {
    
            if (err)
              res.send(err);
                res.json(task);
          });
    }
}