var con = require('./mysqlDb');


const Image = new Object();


Image.uploadImage = function (newImage, result) {
    console.log(newImage, 'newimag');
    if (!newImage.files) {
        const error = new Error('No files were Uploaded');
        result(error, result);
    }
    else {
        var file = newImage.uploaded_image;
        var img_name = file.name;

        if (file.mimetype == "image/jpeg" || file.kmimetype == "image/png" || file.mimetype == "image/gif") {
            file.mv('public/images/uploaded_images/' + file.name, function (err, result) {
                if (err) {
                    result(err, result);
                }
                else {
                    var sql = "INSERT INTO `images` (`image`) VALUES ('" + img_name + "')";
                    con.query(sql, function (err, res) {
                        if (err) {
                            console.log('DB error: ', err);
                            result(err, res);
                        }
                        else {
                            result(null, res);
                        }
                    })
                }
            })
        }
        else{
            const error =  new Error("File type is not supported");
            result(error, res);
        }
    }
}

module.exports = Image;