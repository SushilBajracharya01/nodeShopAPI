const express = require('express');
const router = express.Router();
const {insert_product, get_all_products, get_id_product, delete_id_product} = require('../controllers/productController');

router.get('/', get_all_products);

router.post('/',insert_product);

router.get('/:productId', get_id_product);

router.patch('/:productId', (req, res)=> {
    const id = req.params.productId;
    
    res.status(200).json({
        message: 'handle Patch method here'
    })
})

router.delete('/:productId', delete_id_product);

module.exports = router;