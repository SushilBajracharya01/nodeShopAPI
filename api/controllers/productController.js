var Product = require('../models/productModel');

exports.insert_product = (req, res) => {
    var newProduct = req.body;
    //handles null error
    var responseIsValid = newProduct.name && newProduct.price;

    if (responseIsValid) {
        Product.insertNewProduct(newProduct, (err, result) => {
            if (err) {
                res.send(err);
            }
            else {
                res.status(201).json({
                    message: 'Created product successfully',
                    result: result
                });
            }
        });
    }
    else {
        res.status(400).send({ error: true, message: 'Name and Price value must not be null' })
    }
}

exports.get_all_products = (req, res) => {
    Product.getAllProducts((err, result) => {
        if (err) {
            res.send(err);
        }
        else {

            const response = {
                message: 'handling get request for /products',
                count: result.length,
                result: result.map(item => {
                    return {
                        productId: item.productId,
                        name: item.name,
                        price: item.price,
                        request: {
                            type: 'GET',
                            url: 'http://localhost:3000/products/' + item.productId,
                        }
                    }
                })
            }
            res.status(200).json(response);
        }
    });
}

exports.get_id_product = (req, res) => {
    const id = req.params.productId;

    Product.getProductById(id, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.status(200).json({
                message: 'handling get request for /product/:id',
                result: result
            });
        }
    })
}

exports.delete_id_product = (req, res) => {
    const id = req.params.productId;

    Product.deleteProductById(id, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.status(200).json({
                message: 'handling delete request for /product/:id',
                result: result,
                request: {
                    type: 'POST',
                    url: 'http://localhost:3000/products/',
                    body: {
                        name: 'String',
                        price: 'Number'
                    }
                }
            })
        }
    })
}

exports.patch_id_product = (req, res) => {
    const id = req.params.productId;
    const newProduct = req.body;

    var responseIsValid = newProduct.name && newProduct.price && id;

    if (responseIsValid) {
        Product.patchById(newProduct, id, (err, result) => {
            if (err) {
                res.send(err);
            }
            else {
                res.status(200).json({
                    message: 'handling patch for /products/:id',
                    result: result
                })
            }
        })
    }
    else {
        res.status(400).send({ error: true, message: 'Name and Price value must not be null' })
    }

}