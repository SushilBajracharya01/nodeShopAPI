const express = require('express');
const router = express.Router();
const { insert_product, get_all_products, get_id_product, delete_id_product, patch_id_product } = require('../controllers/productController');

router.get('/', get_all_products);

router.post('/',insert_product);

router.get('/:productId', get_id_product);

router.patch('/:productId', patch_id_product);

router.delete('/:productId', delete_id_product);

module.exports = router;