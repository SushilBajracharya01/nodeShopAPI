const express = require('express');
const router = express.Router();
const { insert_product, get_all_products, get_id_product, delete_id_product, patch_id_product } = require('../controllers/productController');
const checkAuth = require('../middleware/check-auth');

router.get('/', get_all_products);

router.post('/', checkAuth, insert_product);

router.get('/:productId', get_id_product);

router.patch('/:productId', patch_id_product);

router.delete('/:productId', delete_id_product);

module.exports = router;