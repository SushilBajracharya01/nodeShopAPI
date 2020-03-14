const express = require('express');
const router = express.Router();

//Controllers
const { get_all_orders, insert_order, get_id_order, delete_order } = require('../controllers/orderController');

router.get('/', get_all_orders);


router.post('/', insert_order);


router.get('/:orderId', get_id_order);


router.delete('/:orderId', delete_order);

module.exports = router;