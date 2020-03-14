var Product = require('../models/productModel');

exports.insert_product = (req, res) => {
    var newProduct = req.body;
    //handles null error
    var responseIsValid = newProduct.name && newProduct.price;

    if (responseIsValid) {
        Product.insertNewProduct(newProduct, (err, result) => {
            if (err){
                res.send(err);
            }
            res.status(201).json({
                message: 'handling POST request to /products',
                result: result
            });
        });
    }
    else {
        res.status(400).send({ error: true, message: 'Name and Price value must not be null' })
    }
}

exports.get_all_products = (req, res) => {
    Product.getAllProducts( (err, result) => {
        if (err){
            res.send(err);
        }
        res.json(result);
    });
}

exports.get_id_product = (req, res) => {
    const id = req.params.productId;

    Product.getProductById(id, (err, result) => {
        if(err) {
            res.send(err);
        }
        res.status(200).json({
            message: 'handling get request for /product/:id',
            result: result
        });
    })
}