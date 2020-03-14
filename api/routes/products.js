const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Handling GET request to /products',
    })
})


router.post('/', (req, res) => {
    res.status(201).json({
        message: 'Handling POST request to /products'
    })
})

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