const express = require('express');
const app = express();
const multer = require('multer')
const uploadFile = multer({dest: 'tmp'});

// トップページ
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// アップロードされてくる
app.post('/uploadFile', uploadFile.single('file'), (req, res) => {
    console.log(req.file);
});

app.listen(3000);