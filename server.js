var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// auth dependencies
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

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


//////////////////////////////* AUTHENTICATION STUFF *////////////////////////////
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
//         res.redirect('/');
//       });
//     }
//   );
// });
//
// //show login view
// app.get('/login', function (req, res) {
//   res.render('login'); // you can also use res.sendFile
// });
//
// // log in user
// app.post('/login', passport.authenticate('local'), function (req, res) {
//   console.log(req.user);
//   // res.send('logged in!!!'); // sanity check
//   res.redirect('/'); // preferred!
// });
//
// // log out user
// app.get('/logout', function (req, res) {
//   console.log("BEFORE logout", JSON.stringify(req.user));
//   req.logout();
//   console.log("AFTER logout", JSON.stringify(req.user));
//   res.redirect('/');
// });

app.listen(process.env.PORT || 3000, function() {
    console.log('Express server is running on http://localhost:3000/');
});
