var path = require('path');
var express = require('express')
var events = require('./eventsController');
var app = express()
var rootpath = path.normalize(__dirname + '/../');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(rootpath, 'app')));
app.get('/', function(req, res) {
    res.send('Hello World!')
})

app.get('/data/event/:id', events.get);
app.post('/data/event/:id', events.save);
app.get('/data/event', events.getAll);
app.get('*', function(req, res) { res.sendFile(rootpath + '/app/index.html'); });

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})
