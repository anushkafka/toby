const express = require('express');
const photoManager = require('./photoManager');
const cors = require('cors')

const app = express();

app.use(cors());

app.get('/photos', (request, response) => {
    function onGetPhotos(files) {
        response.send({photos: files});
    }
    
    photoManager.getAllPhotos((files) => response.send({photos: files}));
});

app.get('/title', (req, res) => 'anu');

app.use('/files', express.static('photos'));

app.listen(8000, () => console.log('Server is running'));
