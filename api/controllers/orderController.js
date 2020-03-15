const Order = require('../models/orderModel');

exports.insert_order = (req, res) => {
    const newOrder = req.body;
    //handles null error
    var responseIsValid = newOrder.productId && newOrder.quantity;

    if( responseIsValid ) {
        Order.insertNewOrder(newOrder, (err, result) => {
            if(err) {
                res.send(err);
            }
            else{
                res.status(201).json({
                    message: 'Created Order successfully',
                    result: result
                })
            }
        });
    }
    else {
        res.status(400).send({error: true, message: 'ProductId and quantity must not be null'})
    }
    
};
exports.get_all_orders = (req, res) => {
    Order.getAllOrders( (err, result)=> {
        if(err) {
            res.send(err);
        }
        else {
            const response = {
                message: 'Returning all Orders',
                count: result.length,
                result: result.map(item => {
                    return {
                        productId: item.productId,
                        quantity: item.quantity,
                        request: {
                            type: 'GET',
                            url: 'http://localhost:3000/orders/' + item.productId,
                        }
                    }
                })
            }
            res.status(200).json(response);
        }
    });
}

exports.get_id_order = (req, res) => {
    const id = req.params.orderId;
    Order.getOrderById(id, (err, result)=>{
        console.log(err)

        if(err) {
            res.status(404).json({
                err: "404 Content not found"
            });
        }
        else{
            res.status(200).json({
                message: 'handling get request for /orders/:orderId',
                result: result
            });
        }
    });
}

exports.delete_order = (req, res) => {
    const id = req.params.orderId;
    Order.deleteOrderById(id, (err, result) => {
    
        if(err) {
            res.send(err);
        }
        else{
            res.status(200).json({
                message: 'handling delete request for /orders/:id',
                request: {
                    type: 'POST',
                    url: 'http://localhost:3000/orders/',
                    body: {
                        productId: 'Number',
                        quantity: 'Number'
                    }
                },
                result: result
            })
        }
    });
}