const Order = new Object();
const con = require('./mysqlDb'); 

Order.getAllOrders = ( result ) => {
    con.query('select * from orders',(err, res)=>{
        if(err) {
            console.log('DB error: ', err);
            result(err, res);
        }
        else{
            result(null, res);
        }
    })
}

Order.insertNewOrder = (newOrder, result ) => {
    con.query("Insert into Orders set ?", newOrder, (err, res)=>{
        if(err) {
            console.log('DB error: ', err);
            result(err, res);
        }
        else{
            result(null, res);
        }
    })
};

Order.getOrderById = (id, result) => {
    con.query('select * from orders where productId = ?',id, (err, res)=>{
        if(err){
            console.log("DB Error: ", err);
            result(err, res);
        }
        else{
            result(null, res);
        }
    })
}

Order.deleteOrderById =(id, result)=>{
    con.query('Delete from Orders where productId=?',id,(err, res) => {
        if(err){
            console.log("DB Error: ",err);
            result(err, res);
        }
        else{
            result(null, res);
        }
    })
}

module.exports = Order;