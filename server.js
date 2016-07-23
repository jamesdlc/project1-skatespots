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


// // middleware for auth
// app.use(cookieParser());
// app.use(session({
//     secret: 'runningThruThe6withMyWoes', // change this!
//     resave: false,
//     saveUninitialized: false
// }));
// app.use(passport.initialize());
// app.use(passport.session());
//
// // passport config
// passport.use(new passport.use(new LocalStrategy(User.authenticate())));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());


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
app.post('/api/skatespots', controllers.skatespots.create);
//Delete by ID
app.delete('/api/skatespots/:skatespotId', controllers.skatespots.destroy);
//Updated by ID
app.put('/api/skatespots/:skatespotId', controllers.skatespots.update);

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


//* AUTH ROUTES *//
//
// // show signup view
// app.get('/signup', function (req, res) {
//   res.render('signup'); // you can also use res.sendFile
// });
//
// // sign up new user, then log them in
// // hashes and salts password, saves new user to db
// app.post('/signup', function (req, res) {
//   User.register(new User({ username: req.body.username }), req.body.password,
//     function (err, newUser) {
//       passport.authenticate('local')(req, res, function() {
//         res.send('signed up!!!');
//       });
//     }
//   );
// });
//
// // log in user
// app.post('/login', passport.authenticate('local'), function (req, res) {
//   console.log(req.user);
//   res.send('logged in!!!'); // sanity check
//   // res.redirect('/'); // preferred!
// });

app.listen(process.env.PORT || 3000, function() {
    console.log('Express server is running on http://localhost:3000/');
});
