const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Order get mthod0'
    })
})


router.post('/', (req, res) => {
    res.status(201).json({
        message: 'Order post mthod0'
    })
})


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