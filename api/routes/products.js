const express = require('express');
const router = express.Router();
const {insert_product, get_all_products} = require('../controllers/productController');

router.get('/', get_all_products);


// router.post('/', (req, res) => {

//     const product = {
//         name: req.body.name,
//         price: req.body.price
//     };

//     insert_product(res, req);



//     res.status(201).json({
//         message: 'Handling POST request to /products',
//         createdProduct: product
//     })
// })

router.post('/',insert_product);

router.get('/:productId', (req, res)=> {
    const id = req.params.productId;

    if( id === 'special')
    res.status(200).json({
        message: 'You discovered a special ID'
    })
    else{
        res.status(200).json({
            message: 'You passed an ID'
        })
    }
})

router.patch('/:productId', (req, res)=> {
    const id = req.params.productId;
    
    res.status(200).json({
        message: 'handle Patch method here'
    })
})

router.delete('/:productId', (req, res)=>{
    res.status(200).json({
        message: 'handle Delete'
    })
})

module.exports = router;