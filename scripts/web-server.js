// var express = require('express');
// var path = require('path');

// var app = express();
// var rootpath = path.normalize(__dirname + '/../');
// console.log(__dirname);
// console.log(rootpath + '/app');
// app.use(express.static(rootpath + '/app'));

// app.listen(8000);

// console.log('listening on port 8000..');

var path = require('path');
var express = require('express')
var app = express()
var rootpath = path.normalize(__dirname + '/../');

app.use(express.static(path.join(rootpath, 'app')));
app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})