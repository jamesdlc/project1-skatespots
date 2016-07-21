var express = require('express');
// generate a new express app and call it 'app'
var app = express();
var bodyParser = require('body-parser');
// serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
// We'll serve jQuery and bootstrap from a local bower cache avoiding CDNs
// We're placing these under /vendor to differentiate them from our own assets
app.use('/vendor', express.static(__dirname + '/bower_components'));

var controllers = require('./controllers');

//Routes
//GET Home Page
app.get('/', function homepage(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});
app.get('/api/', controllers.api.index);
//Index Show All
app.get('/api/skatespots', controllers.skatespots.index);
//Show by Id
app.get('/api/skatespots/:skatespotId', controllers.skatespots.show);
//POST Create one
app.post('/api/skatespots', controllers.skatespots.create);
//Delete by ID
app.delete('/api/skatespots/:skatespotId', controllers.skatespots.destroy);
//Updated by ID
app.put('/api/skatespots/:skatespotId', controllers.skatespots.update);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express server is running on http://localhost:3000/');
});
