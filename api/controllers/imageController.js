const Image = require('../models/imageModel');


exports.upload_image= (req, res) => {
    const newImage = req.body;
    console.log(req.body)
    Image.uploadImage(newImage, (err, result) => {
        if (err) {
            res.status(404).json({
                message: 'Error occured'
            });
        }
        else {
            res.status(201).json({
                message: 'Image Added into db successfully',
                result: result
            });
        }
    })
};