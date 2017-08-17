const fs = require('fs');

const getAllPhotos = (callback) => {
    fs.readdir('./photos', (err, files) => {
        if (err) {
            throw new Error(err);
        }
        
        return callback(files);
    });
}

module.exports = {
    getAllPhotos,
}
