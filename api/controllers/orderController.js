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
                    message: 'handling Post method request for /orders',
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
            res.status(200).json({
                message: 'handling get for /orders',
                result: result
            })
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
                result: result
            })
        }
    });
}