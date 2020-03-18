const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const fileUpload = require('express-fileupload');

const productsRoute = require('./api/routes/products');
const ordersRoute = require('./api/routes/orders');
const imageRoute = require('./api/routes/images');

const app = express();


app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(fileUpload());

app.use((req, res,next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, PATCH, DELETE');
        res.status(200).json({});
    }
    next();
});



app.use('/products', productsRoute);
app.use('/orders', ordersRoute);
app.use('/image', imageRoute);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status(404);
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})
module.exports = app;