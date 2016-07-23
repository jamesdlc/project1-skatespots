var mongoose = require("mongoose");
module.exports.Skatespot = require("./skatespots.js");
// module.exports.Skatespot = require("./user.js");

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/skatespots" );
