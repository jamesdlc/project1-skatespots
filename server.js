var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// auth dependencies
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// var db = require("./models"),
//     // Post = db.Post,
//     User = db.User;
// serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/vendor', express.static(__dirname + '/bower_components'));

var controllers = require('./controllers');

//* SKATESPOT ROUTES *//
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
app.post('/api/cities/:cityId/skatespots', controllers.skatespots.create);
//Delete by ID
app.delete('/api/skatespots/:skatespotId', controllers.skatespots.destroy);
//Updated by ID
app.put('/api/skatespots/:skatespotId', controllers.skatespots.update);
// Create one skatespot that DOESNT reference city ID
app.post('/api/skatespots', controllers.skatespots.createSkatespot);

//* CITY ROUTES * //

app.get('/api/cities', controllers.cities.index);
//Show by Id
app.get('/api/cities/:cityId', controllers.cities.show);
//POST Create one
app.post('/api/cities', controllers.cities.create);
//Delete by ID
app.delete('/api/cities/:cityId', controllers.cities.destroy);
//Updated by ID
app.put('/api/cities/:cityId', controllers.cities.update);

//spots by city id
app.get('/api/cities/:cityId/skatespots',controllers.skatespots.spotsByCityId);



//* User Routes *//
app.get('/login', controllers.user.login);
app.get('/logout', controllers.user.logout);
app.get('/signup', controllers.user.signup);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express server is running on http://localhost:3000/');
});
