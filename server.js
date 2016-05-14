var express = require('express');
var multer  = require('multer')
var upload = multer()

var app = express();

app.set('port', process.env.PORT || 3000);
app.use('/public', express.static(process.cwd() + '/public'));

 app.get('/', function (req, res) {
       res.sendFile(process.cwd() + '/public/index.html');
    });

app.post('/upload', upload.single('file'), function(req, res) {
    console.log(req.file);
    res.json({
      size: req.file.size
    })
  });

 app.listen(app.get('port'));