const express = require('express');
const router = express.Router();

//Controllers
const { get_all_orders, insert_order } = require('../controllers/orderController');

router.get('/', get_all_orders);


router.post('/', insert_order);


router.get('/:orderId', (req, res) => {
    res.status(200).json({
        message: 'Order details',
        id: req.params.orderId
    })
})


router.delete('/:orderId', (req, res) => {
    res.status(200).json({
        message: 'Order delete mthod0',
        id: req.params.orderId
    })
})

module.exports = router;