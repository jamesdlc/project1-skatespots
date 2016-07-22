var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/skatespots");
module.exports.Skatespot = require("./skatespots.js");

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/skatespots" );
